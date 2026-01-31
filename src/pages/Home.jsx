import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/Ron_image-portfolio.png';
import Card from '../components/Card';
import './Home.css';

const Counter = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hero-section"
            >
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Ron George
                            </motion.h1>
                            <motion.p
                                className="hero-subtitle"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                SOFTWARE DEVELOPMENT ENGINEER | CLOUD & DEVOPS ENGINEER
                            </motion.p>
                            <motion.p
                                className="hero-description"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Software Development Engineer specializing in cloud and DevOps. Experienced in building scalable backend services, containerized deployments, CI/CD automation, and data pipelines. Skilled in Python, Go, JavaScript, Terraform, Kubernetes, GCP/AWS, and observability tooling. Passionate about reliable systems and automation.
                            </motion.p>
                        </div>
                        <motion.div
                            className="hero-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="profile-ring"></div>
                            <img src={profilePic} alt="Profile" />
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.button
                        className="scroll-indicator"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        onClick={() => {
                            const statsSection = document.querySelector('.stats-section');
                            statsSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.div>
                        <span className="scroll-text">Scroll to explore</span>
                    </motion.button>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <Card delay={0.1} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <Counter end={3} />
                                </div>
                                <div className="stat-label">Internships</div>
                            </div>
                        </Card>
                        <Card delay={0.2} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <Counter end={11} suffix="+" />
                                </div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                        </Card>
                        <Card delay={0.3} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <Counter end={9} suffix="+" />
                                </div>
                                <div className="stat-label">Certifications</div>
                            </div>
                        </Card>
                        <Card delay={0.4} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">4.18</div>
                                <div className="stat-label">GPA at ASU</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Experience Overview Section */}
            <section className="what-i-do-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Experience Overview
                    </motion.h2>
                    <div className="expertise-grid">
                        <Card delay={0.1}>
                            <div className="expertise-icon">☁️</div>
                            <h3>Cloud</h3>
                            <p>Designed and operated cloud-native services, leveraging managed platforms and infrastructure as code to build scalable, secure deployments. Experience with multi-cloud patterns, service orchestration, and cost-optimized architectures.</p>
                            <div className="tech-tags">
                                <span>GCP</span>
                                <span>AWS</span>
                                <span>Terraform</span>
                                <span>Kubernetes</span>
                            </div>
                        </Card>
                        <Card delay={0.2}>
                            <div className="expertise-icon">🌐</div>
                            <h3>Full-Stack Development</h3>
                            <p>Built web applications like Promptly (LLM agent framework with RAG and vector-backed knowledge base) and StockVision (real-time stock analysis with AI-driven forecasting). Experience in developing responsive frontends with React and robust backend APIs with Flask.</p>
                            <div className="tech-tags">
                                <span>React</span>
                                <span>Flask</span>
                                <span>REST APIs</span>
                            </div>
                        </Card>
                        <Card delay={0.3}>
                            <div className="expertise-icon">⚙️</div>
                            <h3>DevOps</h3>
                            <p>Built CI/CD pipelines, automated infrastructure provisioning, and operated containerized workloads in production. Focused on observability, release automation, and platform reliability using modern tooling and best practices.</p>
                            <div className="tech-tags">
                                <span>Terraform</span>
                                <span>Docker</span>
                                <span>GitLab CI/CD</span>
                            </div>
                        </Card>
                        <Card delay={0.4}>
                            <div className="expertise-icon">🤖</div>
                            <h3>AI/ML</h3>
                            <p>Built LLM-powered applications with RAG and vector databases (Promptly), customer churn prediction models using XGBoost and Random Forest, and researched optimizer performance in Vision Transformers achieving 92.96% accuracy on CIFAR-10.</p>
                            <div className="tech-tags">
                                <span>Python</span>
                                <span>LLMs</span>
                                <span>TensorFlow</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How I Work Section */}
            {/* 'How I Work' and 'Featured Projects' sections removed as requested */}

            {/* Recent Experience */}
            <section className="recent-experience-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Currently
                    </motion.h2>
                    <Card delay={0.1}>
                        <div className="experience-highlight">
                            <div className="exp-header">
                                <div>
                                    <h3>Operations Engineer Intern</h3>
                                    <p className="exp-company">Lumen Technologies</p>
                                </div>
                                <span className="exp-badge">Current</span>
                            </div>
                            <p className="exp-period">June 2025 – Present | Tempe, Arizona</p>
                            <p className="exp-description">
                                Developed a Microsoft Teams AI chatbot for automated ticket troubleshooting using Azure OpenAI and RAG, improving ticket resolution efficiency by ~35%. Built GitLab CI/CD pipelines using Docker and Ansible, enhanced a Django-based BGP monitoring portal, and owned production deployments and operational support.
                            </p>
                            <Link
                                to="/experience"
                                className="view-all-link"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                View All Experience →
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Recommendations section removed */}

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <Card delay={0.1} hover={false}>
                        <div className="cta-content">
                            <h2>Let's Work Together</h2>
                            <p>Looking for full-time SWE roles starting May 2026. Let's connect and build something amazing!</p>
                            <div className="cta-buttons">
                                <motion.a
                                    href="/contact"
                                    className="btn-primary"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get In Touch
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com/in/rongeorge74/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    LinkedIn
                                </motion.a>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                </div>
            </footer>
        </div>
    );
}
