import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';

export default function VisitTracker() {
  const [todayCount, setTodayCount] = useState(null);
  const [monthCount, setMonthCount] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [open, setOpen] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const isAdmin = urlParams.get('admin') === 'true';

  useEffect(() => {
    const trackVisit = async () => {
      const now = new Date();
      const todayDate = now.toISOString().substring(0, 10);

      await addDoc(collection(db, "visitLogs"), {
        timestamp: now,
        date: todayDate,
        userAgent: navigator.userAgent
      });

      if (isAdmin) {
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfMonthTimestamp = Timestamp.fromDate(firstDayOfMonth);

        const totalSnapshot = await getDocs(collection(db, "visitLogs"));
        setTotalCount(totalSnapshot.size);

        const todayQuery = query(collection(db, "visitLogs"), where("date", "==", todayDate));
        const todaySnapshot = await getDocs(todayQuery);
        setTodayCount(todaySnapshot.size);

        const monthQuery = query(
          collection(db, "visitLogs"),
          where("timestamp", ">=", startOfMonthTimestamp)
        );
        const monthSnapshot = await getDocs(monthQuery);
        setMonthCount(monthSnapshot.size);
      }
    };

    trackVisit();
  }, [isAdmin]);

  if (!isAdmin) return null;

  return (
    <>
      <div style={floatingButton} onClick={() => setOpen(!open)}>
        {open ? '🔽' : '📈'}
      </div>

      <div style={{
        ...panelStyle,
        transform: open ? 'translateY(0)' : 'translateY(20px)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none'
      }}>
        <div style={headerStyle}>Visitor Stats</div>
        <Stat label="Today's Visitors" count={todayCount} />
        <Stat label="This Month" count={monthCount} />
        <Stat label="All Time" count={totalCount} />
      </div>
    </>
  );
}

function Stat({ label, count }) {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (count === null) return;
    let start = 0;
    const duration = 500;  // ms
    const increment = count / (duration / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= count) {
        clearInterval(interval);
        setDisplayCount(count);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div style={statRow}>
      <span style={statLabel}>{label}:</span>
      <span style={statValue}>{displayCount ?? '...'}</span>
    </div>
  );
}

// Styles

const floatingButton = {
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #00b4db, #0083b0)',
  color: 'white',
  fontSize: '26px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
  cursor: 'pointer',
  zIndex: 1000,
  transition: 'all 0.3s ease'
};

const panelStyle = {
  position: 'fixed',
  bottom: '90px',
  left: '20px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  fontFamily: '"Segoe UI", Roboto, sans-serif',
  fontSize: '15px',
  width: '240px',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  border: '1px solid #ddd'
};

const headerStyle = {
  marginBottom: '15px',
  fontSize: '17px',
  fontWeight: '600',
  color: '#0083b0',
  textAlign: 'center'
};

const statRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '12px'
};

const statLabel = {
  color: '#333'
};

const statValue = {
  fontWeight: 'bold',
  color: '#000'
};
