import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import Footer from './components/Footer';
import { menuItems } from './data/menuItems';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

const categories = ["Tous", "Plats", "Sandwich / Tacos", "Nuggets / Wings", "Boissons"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

function App() {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === "Tous" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="App">
            <Navbar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <Hero />

            <section id="menu" className="menu-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2 className="section-title">
                            {activeCategory === "Tous" ? "Découvrez Notre" : activeCategory}
                            <span> {activeCategory === "Tous" ? "Menu" : ""}</span>
                        </h2>
                        <p className="section-subtitle">
                            Séléctionnez une catégorie dans la barre de navigation pour filtrer les délices de Larry.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        layout
                        className="menu-grid"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="no-results"
                        >
                            <p>Aucun article trouvé pour "<span>{searchTerm}</span>"</p>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
