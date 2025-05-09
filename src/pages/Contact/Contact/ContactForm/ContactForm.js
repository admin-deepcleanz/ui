import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';

const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, subject } = formData;

        if (!name || !email || !phone || !subject) {
            setError('Please fill all required fields.');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Enter a valid email address.');
            return;
        }

        if (!isValidPhone(phone)) {
            setError('Enter a valid 10-digit phone number.');
            return;
        }

        emailjs.sendForm(
            'service_rhxf3t4', // 🔁 Replace with your actual EmailJS service ID
            'template_n15hlwv', // 🔁 Replace with your actual EmailJS template ID
            form.current,
            'hiMSFqxH2h7sxvcAl' // 🔁 Replace with your EmaiJS public key
        ).then(
            () => {
                setSuccess('Message sent successfully!');
                setError('');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            },
            () => {
                setError('Something went wrong. Please try again.');
                setSuccess('');
            }
        );
    };

    return (
        <section className="tp-contact-area pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                            <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Get Free Estimate</h5>
                            <h2 className="tp-section-title heading-color-black">If you Have Any Query, Don’t Hesitate <br />Contact with us </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Contact Info */}
                    <div className="col-lg-4">
                        <div className="row custom-mar-20">
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="tp-contact-info-icon">
                                        <i><FaMapMarkerAlt className='contact_icon' /></i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title mb-15">Address</h4>
                                        <p>41, South Lock St, Kotturpuram<br />Chennai - 600085.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="tp-contact-info-icon">
                                        <i><FaPhoneAlt className='contact_icon' /></i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title mb-15">Phone</h4>
                                        <a href="tel:+919363609470">+91 93636 09470</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="tp-contact-info-icon">
                                        <i><FaEnvelopeOpen className='contact_icon' /></i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title mb-15">Email</h4>
                                        <a href="mailto:info@deepcleanz.com">info@deepcleanz.com</a>
                                        <a href="mailto:hello@deepcleanz.com">hello@deepcleanz.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="tp-contact-form">
                                <div className="row custom-mar-20">
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field select-field-arrow mb-20">
                                            <select name="subject" value={formData.subject} onChange={handleChange}>
                                                <option value="">Choose Subject</option>
                                                <option value="Full House Deep Cleaning">Full House Deep Cleaning</option>
                                                <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                                <option value="Bedroom Cleaning">Bedroom Cleaning</option>
                                                <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                                                <option value="Sofa Cleaning">Sofa Cleaning</option>
                                                <option value="Carpet Cleaning">Carpet Cleaning</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 custom-pad-20">
                                        <div className="tp-contact-form-field">
                                            <button type="submit" className="theme-btn text-white">
                                                <i className="flaticon-enter"></i> Send Message
                                            </button>
                                        </div>
                                    </div>
                                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                                    {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
