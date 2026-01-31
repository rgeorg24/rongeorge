import { motion } from 'framer-motion';
import Card from '../components/Card';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '3rem' }}
        >
            <div style={{ textAlign: 'center', maxWidth: '700px', width: '100%' }}>
                <h1>Get In Touch</h1>
                <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.7' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <Card delay={0.1} hover={false} style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1.4rem' }}>Contact Information</h3>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        <strong style={{ color: 'var(--accent)' }}>Email</strong><br />
                        <a href="mailto:ron.george.336@gmail.com" style={{ fontSize: '1.15rem', marginTop: '0.5rem', display: 'inline-block' }}>
                            ron.george.336@gmail.com
                        </a>
                    </p>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        <strong style={{ color: 'var(--accent)' }}>Phone</strong><br />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.5rem', display: 'inline-block' }}>
                            (623) 281-7294
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        <strong style={{ color: 'var(--accent)' }}>Location</strong><br />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.5rem', display: 'inline-block' }}>
                            Tempe, AZ, USA
                        </span>
                    </p>
                </Card>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <motion.a
                        href="https://linkedin.com/in/rongeorge74/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass"
                        style={{ padding: '1.2rem 2.5rem', display: 'inline-block', fontWeight: 600, fontSize: '1.05rem' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a
                        href="https://github.com/rongeorge74"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass"
                        style={{ padding: '1.2rem 2.5rem', display: 'inline-block', fontWeight: 600, fontSize: '1.05rem' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        href="https://leetcode.com/u/rongeorge74/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass"
                        style={{ padding: '1.2rem 2.5rem', display: 'inline-block', fontWeight: 600, fontSize: '1.05rem' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        LeetCode
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
