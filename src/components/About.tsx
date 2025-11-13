import React from 'react';

import imageAbout1 from '../assets/images/about1.jpg';
import imageAbout2 from '../assets/images/about2.jpg';
import imageAbout3 from '../assets/images/about3.jpg';


const About: React.FC = () => (
    <section className="section about-section snap-section" id="about">
        <div className="container">
            <h2 className="section-title">Innovation, Engineered. Execution, Guaranteed.</h2>
            <p className="section-subtitle">At Baysquare, Innovation isn’t just a buzzword; it’s systematically designed, architected, and built with technical rigor. You’re not just promised results — you’re assured of delivery. </p>
            <div className="divider"></div>
            <div className="about-grid">
                <div className="about-card">
                    <img src={imageAbout1} alt="Why choose us" className="about-card-img"/>
                    <h3 className="about-card-title">Why choose Us.</h3>
                    <p className="about-card-subtitle">Because we are Reliable.</p>
                    <p className="about-card-text">
                        Consistent performance, minimal downtime, and predictable outcomes define true reliability in engineering. 
                        Clients trust us because we deliver — on time, every time. In a world full of promises, Baysquare team will show up, follow through, and exceed expectations without excuses.
                    </p>
                </div>
                <div className="about-card">
                    <img src={imageAbout2} alt="Our Mission" className="about-card-img"/>
                    <h3 className="about-card-title">Our Mission.</h3>
                    <p className="about-card-subtitle">Build products that matter.</p>
                    <p className="about-card-text">
                        We build products that connect — combining intuitive design, scalable tech, and strategic insight. Whether launching, revamping, or expanding, our solutions drive engagement, boost visibility, and unlock growth—all aligned with your business goals.
                    </p>
                </div>
                <div className="about-card">
                    <img src={imageAbout3} alt="What we Do" className="about-card-img"/>
                    <h3 className="about-card-title">What we Do.</h3>
                    <p className="about-card-subtitle">Deliver solutions people trust.</p>
                    <p className="about-card-text">
                        We’re committed to making our customers happy by delivering thoughtful solutions, seamless experiences, and measurable results. From first interaction to final delivery, we focus on what matters most—your satisfaction, success, and long-term growth.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default About;