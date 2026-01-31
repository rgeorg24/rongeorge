import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        name: "GenAI Invoice Data Extractor",
        tech: "Python, Streamlit, Google Gemini Vision, Docker, Cloud Run",
        period: "2025",
        desc: "Developed an Invoice Analysis application using Python and Streamlit integrated with Google Gemini Pro Vision API to analyze invoice images and extract structured invoice data. Containerized and deployed on GCP Cloud Run.",
        skills: ["Python", "Streamlit", "Google Gemini", "Docker", "Google Cloud Run", "Vision AI"]
    },
    {
        name: "Handling Class Imbalance in Fraud Detection",
        tech: "Python, scikit-learn",
        period: "2024",
        desc: "Addressed class imbalance in fraud detection by applying sampling techniques and evaluating classifiers (KNN, Random Forest), producing a high-performing model (reported accuracy ~99.94%).",
        skills: ["Python", "Classification Algorithms", "Imbalanced Learning"]
    },
    {
        name: "Nutritionist Generative AI Doctor",
        tech: "Python, Streamlit, Google Gemini Vision, Docker, Cloud Run",
        period: "2025",
        desc: "Built a food recognition app using Google Gemini Pro Vision to analyze uploaded food images, estimate calorie content, and surface nutrition info. Containerized and deployed to GCP Cloud Run.",
        skills: ["Python", "Google Gemini", "Streamlit", "Docker", "Google Cloud Run", "Vision API"]
    },
    {
        name: "Personal Portfolio Website",
        tech: "React, Docker, GCP Cloud Run, Firebase, Cloud DNS",
        period: "2024",
        desc: "Created a personal portfolio site in React, containerized with Docker and deployed on GCP Cloud Run. Also hosted via Firebase with DNS redirect to Cloud Run.",
        skills: ["React.js", "Docker", "Google Cloud Run", "HTML", "CSS", "Artifact Registry", "Cloud DNS", "Firebase"]
    },
    {
        name: "User Portal Application",
        tech: "React, Docker, Cloud Build, GKE",
        period: "2024",
        desc: "Developed a user portal in React, containerized the app, implemented CI/CD with Cloud Build, and deployed to Google Kubernetes Engine for scalable production deployment.",
        skills: ["React.js", "Docker", "GKE", "Cloud Build"]
    }
];

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Projects</h1>

            <div className="timeline-container">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <div className="project-title-group">
                                    <h3>{proj.name}</h3>
                                    {proj.university && (
                                        <p className="project-university">{proj.university}</p>
                                    )}
                                </div>
                                <div className="project-badges">
                                    <span className="project-badge">📅 {proj.period}</span>
                                </div>
                            </div>

                            <div className="project-meta">
                                <span>🛠️ {proj.tech}</span>
                            </div>

                            <p className="project-description">{proj.desc}</p>

                            <div className="project-skills">
                                {proj.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>

                            {proj.link && (
                                <motion.a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View on GitHub
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
