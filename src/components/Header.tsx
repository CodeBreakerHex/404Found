import React, { useState, useEffect, useMemo } from 'react';
import { MenuIcon, XIcon } from './Icons';

import imageLogo from '../assets/images/BaysquareLogo.png'

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = useMemo(() => [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Approach', href: '#services' },
        { name: 'Services', href: '#approach' },
        { name: 'Contact', href: '#contact' },
    ], []);

    useEffect(() => {
        const sections = navItems.map(item => document.getElementById(item.href.substring(1)));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' } // Set active when section is in the middle of the viewport
        );

        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [navItems]);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        if (href) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <a href="#home" onClick={handleLinkClick} aria-label="Baysquare Homepage">
                        <img 
                            src={imageLogo}
                            alt="Baysquare Logo" 
                            className="logo-img"
                        />
                    </a>
                </div>
                <nav className="main-nav">
                    {navItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="header-actions">
                    <button className="mobile-nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    {navItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;