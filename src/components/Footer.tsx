import React from 'react';

const Footer: React.FC = () => (
    <footer className="footer" id="contact">
        <div className="container footer-main">
            <div className="footer-grid">
                <div className="footer-column">
                    <h3 className="footer-logo">Baysquare Technologies</h3>
                    <p>Empowering enterprise with intelligent solutions.</p>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Address</h3>
                    <p>Level-4, A wing, Dynasty Busniess Park, <br /> Andheri Kurla Road, Andheri East, Mumbai 400059</p>
                    <div className="footer-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.197185540685!2d72.89610646451716!3d19.116458793033217!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x3be7c822c072a3bb%3A0x7a7a283e3d642438!2sBaysquare%20Technologies!5e0!3m2!1sen!2sin!4v1593794596056!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Baysquare Technologies Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container footer-bottom-container">
                <p>Copyrights © 2025 All Rights Reserved by Baysquare Technologies Pvt. Ltd.</p>
            </div>
        </div>
    </footer>
);

export default Footer;