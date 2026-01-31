import { motion } from 'framer-motion';
import './Card.css';

export default function Card({
    children,
    hover = true,
    delay = 0,
    className = '',
    ...props
}) {
    const hoverAnimation = hover ? {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    } : {};

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={hoverAnimation}
            className={`liquid-card ${className}`}
            {...props}
        >
            <div className="card-shine"></div>
            <div className="card-content">
                {children}
            </div>
        </motion.div>
    );
}
