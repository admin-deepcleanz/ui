import React from 'react';

const HomeSingleTestimonial = ({ image, name, title, review }) => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">{review}</p>
                <div className="tp-testimonial-author">
                    {image &&
                        < div className="tp-testimonial-author-img">
                            <img src={`assets/img/testimonial/testimonial-author-${image}.jpg`} className="img-fluid" alt="img not found" />
                        </div>
                    }
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">{name}</h4>
                        <span className="tp-testimonial-author-text-designation">{title}</span>
                    </div>
                </div>
                <div className="tp-testimonial-qoute">
                    <img src="assets/img/icon/test-qoute.png" alt="img not found" />
                </div>
            </div >
        </>
    );
};

export default HomeSingleTestimonial;