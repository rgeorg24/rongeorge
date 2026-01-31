import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.body.className = `${savedTheme}-mode`;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = `${newTheme}-mode`;
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' },
        { path: '/publications', label: 'Publications' },
        { path: '/education', label: 'Education' },
        { path: '/certifications', label: 'Certifications' },
        { path: '/resume', label: 'Resume' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
            <div className="nav-content">
                <Link to="/" className="nav-logo">
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        RG
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            <span>{link.label}</span>
                            {location.pathname === link.path && (
                                <motion.div
                                    className="active-indicator"
                                    layoutId="activeNav"
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions">
                    <motion.button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="mobile-menu-button"
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </motion.button>
                </div>
            </div>
        </motion.nav>

        {/* Mobile Menu Overlay - Outside navbar */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    >
                        <div className="mobile-menu-content">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                        {location.pathname === link.path && (
                                            <motion.div
                                                className="mobile-active-dot"
                                                layoutId="activeMobile"
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        </>
    );
}
