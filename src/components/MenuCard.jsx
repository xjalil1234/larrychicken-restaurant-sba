import React from 'react';
import { motion } from 'framer-motion';
import './MenuCard.css';

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
        }
    }
};

const MenuCard = ({ item }) => {
    return (
        <motion.div
            layout
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            whileHover={{ y: -12 }}
            className="menu-card"
        >
            <div className="card-image">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />
                <div className="price-badge">{item.price} DA</div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-footer">
                    <span className="category-tag">{item.category}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuCard;
