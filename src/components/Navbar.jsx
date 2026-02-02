import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ categories, activeCategory, setActiveCategory, searchTerm, setSearchTerm }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Auto-scroll to menu when searching if not already there
        if (value.length > 0) {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                const rect = menuSection.getBoundingClientRect();
                if (rect.top > 100) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const scrollToMenu = (cat) => {
        setActiveCategory(cat);
        setIsMobileMenuOpen(false);
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    LARRY<span>CHICKEN</span>
                </motion.div>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {categories.map((cat, index) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`nav-link ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => scrollToMenu(cat)}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                <div className="nav-actions">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="search-container"
                    >
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Chercher..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </motion.div>

                    <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="mobile-nav-menu"
                    >
                        {categories.map((cat, index) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`mobile-nav-link ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => scrollToMenu(cat)}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
