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