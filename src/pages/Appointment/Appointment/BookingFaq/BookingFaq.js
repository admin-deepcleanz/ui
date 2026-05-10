import React from 'react';

const faqs = [
   {
      q: 'Do I need to pay before the cleaning?',
      a: 'No. We only ask for payment after the cleaning is fully completed and you are satisfied with the results.',
   },
   {
      q: 'Do you bring your own equipment?',
      a: 'Yes. Our team arrives with all the necessary cleaning equipment and supplies — you don\'t need to arrange anything.',
   },
   {
      q: 'How quickly can you schedule a visit?',
      a: 'We typically schedule within 1–2 days. Submit a request and we\'ll call back the same day to confirm a time that works for you.',
   },
];

const BookingFaq = () => {
   return (
      <section className="booking-faq">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-7 text-center">
                  <div className="wow fadeInUp" data-wow-delay=".1s">
                     <span className="premium-home__eyebrow">Common Questions</span>
                     <h2 className="tp-section-title heading-color-black mt-3">
                        Before You Book
                     </h2>
                  </div>
               </div>
            </div>
            <div className="booking-faq__grid">
               {faqs.map((faq, index) => (
                  <div
                     className="booking-faq__card wow fadeInUp"
                     data-wow-delay={`${0.2 + index * 0.12}s`}
                     key={faq.q}
                  >
                     <h4 className="booking-faq__q">{faq.q}</h4>
                     <p className="booking-faq__a">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default BookingFaq;
