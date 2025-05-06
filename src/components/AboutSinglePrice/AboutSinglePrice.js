import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const AboutSinglePrice = ({ icon_name, title, price, count }) => {
    return (
        <>
            <div className="col-xl-4 col-md-6 mb-30">
                <div className="tp-pricing tp-pricings bg-gray-light text-center wow flipInY" data-wow-delay=".2s">
                    <div className="tp-pricing-icon mb-40">
                        <div className="tp-pricing-icon-inner">
                            <i className={`flaticon-${icon_name}`}></i>
                        </div>
                    </div>
                    <div className="tp-pricing-rate">
                        <div className="tp-pricing-rate-inner text-center">
                            <h4 className="tp-pricing-rate-subtitle mb-30">{title}</h4>
                            <h2 className="tp-pricing-rate-title mb-45"><p>Starts at</p><span>$</span>{price}</h2>
                        </div>
                    </div>
                    <div className="tp-pricing-list mb-45">
                        <ul>
                            <li><i > <GiCheckMark /> </i> {count} Bedroom Cleaning</li>
                            <li><i > <GiCheckMark /> </i> {count} Bathroom Machine Deep Cleaning</li>
                            <li><i > <GiCheckMark /> </i> Kitchen Full Deep Cleaning</li>
                            <li><i > <GiCheckMark /> </i> Floor Moping</li>
                        </ul>
                    </div>
                    <div className="tp-pricing-btn">
                        <Link to="/pricing" className="theme-btn text-white"><i className="flaticon-enter"></i> Get Service</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSinglePrice;