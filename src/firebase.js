import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEkYGTm2_3j8wWHVhO0tL1o9EYMOijnRU",
  authDomain: "deepcleanz.firebaseapp.com",
  projectId: "deepcleanz",
  storageBucket: "deepcleanz.firebasestorage.app",
  messagingSenderId: "990141988531",
  appId: "1:990141988531:web:fbc2cdccc188cb58073ac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
