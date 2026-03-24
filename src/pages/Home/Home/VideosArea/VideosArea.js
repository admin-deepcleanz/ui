import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const videos = [
   {
      id: 'llGWHQXbSdY',
      title: 'Floor Mopping Demo',
      label: 'Floor mopping',
      copy: 'See how our team handles floor mopping for a cleaner, fresher finish in lived-in spaces.',
   },
   {
      id: 'eVOyHWRkVqA',
      title: 'Sofa Cleaning Demo',
      label: 'Sofa cleaning',
      copy: 'A quick look at our sofa cleaning process for lifting dust, marks, and everyday buildup.',
   },
];

const VideosArea = () => {
   return (
      <section className="premium-home__videos pt-60 pb-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9">
                  <div className="tp-section-title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".1s">
                     <span className="premium-home__eyebrow">Real Cleaning Videos</span>
                     <h2 className="tp-section-title">See Our Team in Action</h2>
                     <p className="mb-0">
                        A quick look at real DeepCleanz work before you book.
                     </p>
                  </div>
               </div>
            </div>

            <div className="row g-4 premium-home__videos-grid">
               {videos.map((video, index) => (
                  <div className={`col-lg-6 ${index > 0 ? 'premium-home__video-card--extra' : ''}`} key={video.id}>
                     <div className="premium-home__video-card wow fadeInUp" data-wow-delay={`${0.15 + index * 0.15}s`}>
                        <div className="premium-home__video-frame">
                           <iframe
                              src={`https://www.youtube.com/embed/${video.id}`}
                              title={video.title}
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                           ></iframe>
                        </div>
                        <div className="premium-home__video-copy">
                           <span className="premium-home__video-label">{video.label}</span>
                           <p className="mb-0">{video.copy}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="row">
               <div className="col-12">
                  <div className="text-center mt-35 wow fadeInUp" data-wow-delay=".35s">
                     <a
                        href="https://youtube.com/@deepcleanz?si=NrAEGkGCfZvJik-E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-btn text-white"
                     >
                        <FaYoutube style={{ marginRight: '10px', transform: 'translateY(-1px)' }} />
                        View More on YouTube
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default VideosArea;
