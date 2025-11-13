import React, { useState, useMemo } from 'react';
import { TrophyIcon, UserCircleIcon, UserGroupIcon, RefreshIcon, ChevronRightIcon } from './Icons';

const Consultation: React.FC = () => {
    const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);

    const refreshCaptcha = () => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
    };

    const metrics = [
        {
            icon: <TrophyIcon className="metric-icon" />,
            title: '20+ years of experience',
            description: 'We can handle projects of all complexities.'
        },
        {
            icon: <UserCircleIcon className="metric-icon" />,
            title: '2500+ satisfied customers',
            description: 'Startups to Fortune 500, we have worked with all.'
        },
        {
            icon: <UserGroupIcon className="metric-icon" />,
            title: '675+ in-house team',
            description: 'Top 1% industry talent to ensure your digital success.'
        }
    ];

    return (
        <section className="section consultation-section">
            <div className="container">
                <div className="consultation-grid">
                    <div className="consultation-info">
                        <h3 className="consultation-info-title">Trusted by Startups and Fortune 500 companies</h3>
                        <div className="metrics-list">
                            {metrics.map(metric => (
                                <div key={metric.title} className="metric-item">
                                    {metric.icon}
                                    <div className="metric-text">
                                        <h4>{metric.title}</h4>
                                        <p>{metric.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="partner-logos">
                            <div className="partner-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft Partner" />
                            </div>
                             <div className="partner-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_Web_Services_logo.svg/1280px-Amazon_Web_Services_logo.svg.png" alt="AWS Partner" />
                            </div>
                             <div className="partner-logo partner-logo-google">
                                <span>Partner</span>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="Google Cloud Partner" style={{height: '1.5rem'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="consultation-form-wrapper">
                        <h2>Book Free Consultation</h2>
                        <p className="response-guarantee">Guaranteed response within 8 business hours.</p>

                        <form className="consultation-form">
                            <div className="form-group">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" id="fullName" className="form-input" placeholder="Full Name" />
                            </div>
                             <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-input" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Phone No.</label>
                                <div className="phone-input-wrapper">
                                     <span className="country-code">🇮🇳</span>
                                     <input type="tel" id="phone" className="form-input phone-input" placeholder="Phone Number (Optional)" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">Select Country</label>
                                <input type="text" id="country" className="form-input" placeholder="Country" />
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="service" className="form-label">Select Your Service*</label>
                                <select id="service" className="form-select">
                                    <option>Please Select From The Dropdown</option>
                                    <option>IoT Connectivity</option>
                                    <option>System Integration</option>
                                    <option>Device Security</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="requirements" className="form-label">Your Requirements</label>
                                <textarea id="requirements" className="form-textarea" rows={4} placeholder="Project Brief"></textarea>
                            </div>
                             <div className="form-group full-width">
                                <div className="file-dropzone">
                                    BROWSE | DROP FILES HERE
                                </div>
                            </div>
                            <div className="form-group captcha-group full-width">
                               <div className="captcha-wrapper">
                                    <div className="captcha-box">
                                        <span>{num1}</span>
                                        <span>+</span>
                                        <span>{num2}</span>
                                        <button type="button" onClick={refreshCaptcha} aria-label="Refresh captcha">
                                            <RefreshIcon />
                                        </button>
                                    </div>
                                    <span>=</span>
                                    <input type="number" className="captcha-input" placeholder="??" aria-label="Captcha answer"/>
                               </div>
                            </div>
                            <div className="form-group full-width">
                                <button type="submit" className="enquire-btn">
                                    ENQUIRE NOW
                                    <ChevronRightIcon className="icon"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultation;