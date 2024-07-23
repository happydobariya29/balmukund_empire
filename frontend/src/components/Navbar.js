import React, { useEffect, useState } from 'react';
import '../style.css'; // Make sure this path is correct based on your project structure


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Change this value based on when you want the header to change class
            const threshold = 100;

            if (scrollPosition > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClass = isScrolled ? 'active header' : 'header';

    return (
        <header className={headerClass} data-header>
            <div className="container">

                <h1>
                    <a href="/" className="logo">
                        BALMUKUND
                    </a>
                </h1>

                <nav className="navbar" data-navbar>

                    <div className="navbar-top">
                        <a href="/" className="logo">BALMUKUND</a>

                        <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <a href="#home" className="navbar-link" data-nav-link>
                                <span>Home</span>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#about" className="navbar-link" data-nav-link>
                                <span>About</span>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#service" className="navbar-link" data-nav-link>
                                <span>Service</span>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#blog" className="navbar-link" data-nav-link>
                                <span>Blog</span>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#footer" className="navbar-link" data-nav-link>
                                <span>Contact</span>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </nav>

                <div className="header-contact">
                    <div>
                        <p className="contact-label">For Any Query</p>
                        <a href="tel:9825266948" className="contact-number">+91 98252 66948</a>
                    </div>
                    <div className="contact-icon">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                </div>

                <button className="nav-open-btn" aria-label="Open menu" data-nav-toggler>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <div className="overlay" data-nav-toggler data-overlay></div>

            </div>
        </header>
    );
}

export default Navbar;
