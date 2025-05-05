import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSIngleAbout = ({icon,title}) => {
    return (
        <>
            <div className="col-sm-6">
                <div className="tp-about-service mb-35">
                    <div className="tp-about-service-icon yellow-circle-shape mb-20">
                        <i className={`flaticon-${icon}`}></i>
                    </div>
                    <div className="tp-about-service-text">
                        <h4 className="tp-about-service-text-title mb-15">
                            <Link to="/services">{title}</Link></h4>
                        <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeSIngleAbout;