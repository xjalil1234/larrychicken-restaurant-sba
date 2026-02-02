import React from 'react';
import { Facebook, Instagram, Twitter, Phone, MapPin, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <div className="logo footer-logo">
                        LARRY<span>CHICKEN</span>
                    </div>
                    <p className="footer-desc">
                        Le meilleur poulet croustillant en ville. Une expérience street-food unique qui va éveiller vos papilles.
                    </p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <ul>
                        <li><Phone size={18} /> +213 555 000 000</li>
                        <li><MapPin size={18} /> Alger, Algérie</li>
                        <li><Clock size={18} /> 11:00 - 23:00</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Liens Rapides</h3>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#">À Propos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Larry Chicken. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
