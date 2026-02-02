import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-subtitle"
                >
                    Bienvenue chez
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-title"
                >
                    LARRY <span>CHICKEN</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-description"
                >
                    Le goût authentique du street-food croustillant. Bold. Energetic. Appétissant.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="hero-cta"
                >
                    <button className="btn btn-primary" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                        Voir le menu <ChevronRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
