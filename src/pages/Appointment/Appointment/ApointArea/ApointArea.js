import React, { useRef, useState } from 'react';

const ApointArea = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        service: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidPhone = (phone) => {
        return /^[6-9]\d{9}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.service || !formData.location) {
            setError('Please fill in all required fields.');
            return;
        }

        if (!isValidPhone(formData.phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }

        await fetch('https://hook.eu2.make.com/fbwndbexchu5i2win4z6gpnj1tvw33ob', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(() => {
            setSuccess('Your appointment request has been sent!');
            setError('');
            setFormData({ name: '', phone: '', service: '', message: '', location: '' });
        })
            .catch(() => {
                setError('Failed to send. Please try again.');
                setSuccess('');
            });
    };

    return (
        <section className="tp-appoint-contact-area pt-145 appoint_bg" data-background="assets/img/appoint/appoint-bg.jpg">
            <div className="container">
                <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="tp-appoint-contact">
                            <form ref={form} onSubmit={handleSubmit} className="text-start tp-testimonial-two-form-wrapper">
                                <h3 className="tp-testimonial-form-title mb-30 text-white">Appointment</h3>

                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {success && <p style={{ color: 'green' }}>{success}</p>}

                                <div className="input-field mb-15">
                                    <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="input-field mb-15">
                                    <input type="text" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="input-field select-field-arrow mb-15">
                                    <select name="service" value={formData.service} onChange={handleChange}>
                                        <option value="">Select Service</option>
                                        <option value="Full House Deep Cleaning">Full House Deep Cleaning</option>
                                        <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                        <option value="Bedroom Cleaning">Bedroom Cleaning</option>
                                        <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                                        <option value="Sofa Cleaning">Sofa Cleaning</option>
                                        <option value="Carpet Cleaning">Carpet Cleaning</option>
                                    </select>
                                </div>
                                <div className="input-field mb-15">
                                    <input type="text" placeholder="Location" name="location" value={formData.location} onChange={handleChange} />
                                </div>
                                <div className="input-field mb-15">
                                    <textarea placeholder="Write Message" name="message" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="input-field">
                                    <button type="submit" className="yellow-btn">
                                        <i className="flaticon-enter"></i> Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApointArea;
