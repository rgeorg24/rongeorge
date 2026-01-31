import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        name: "GenAI Invoice Data Extractor",
        tech: "Python, Streamlit, Google Gemini Vision, Docker, Cloud Run",
        period: "2025",
        desc: "Developed an Invoice Analysis application using Python and Streamlit integrated with Google Gemini Pro Vision API to analyze invoice images and extract structured invoice data. Containerized and deployed on GCP Cloud Run.",
        skills: ["Python", "Streamlit", "Google Gemini", "Docker", "Google Cloud Run", "Vision AI"],
        link: ""
    },
    {
        name: "Handling Class Imbalance in Fraud Detection",
        tech: "Python, scikit-learn",
        period: "2024",
        desc: "Addressed class imbalance in fraud detection by applying sampling techniques and evaluating classifiers (KNN, Random Forest), producing a high-performing model (reported accuracy ~99.94%).",
        skills: ["Python", "Classification Algorithms", "Imbalanced Learning"],
        link: ""
    },
    {
        name: "Nutritionist Generative AI Doctor",
        tech: "Python, Streamlit, Google Gemini Vision, Docker, Cloud Run",
        period: "2025",
        desc: "Built a food recognition app using Google Gemini Pro Vision to analyze uploaded food images, estimate calorie content, and surface nutrition info. Containerized and deployed to GCP Cloud Run.",
        skills: ["Python", "Google Gemini", "Streamlit", "Docker", "Google Cloud Run", "Vision API"],
        link: ""
    },
    {
        name: "Personal Portfolio Website",
        tech: "React, Docker, GCP Cloud Run, Firebase, Cloud DNS",
        period: "2024",
        desc: "Created a personal portfolio site in React, containerized with Docker and deployed on GCP Cloud Run. Also hosted via Firebase with DNS redirect to Cloud Run.",
        skills: ["React.js", "Docker", "Google Cloud Run", "HTML", "CSS", "Artifact Registry", "Cloud DNS", "Firebase"],
        link: ""
    },
    {
        name: "User Portal Application",
        tech: "React, Docker, Cloud Build, GKE",
        period: "2024",
        desc: "Developed a user portal in React, containerized the app, implemented CI/CD with Cloud Build, and deployed to Google Kubernetes Engine for scalable production deployment.",
        skills: ["React.js", "Docker", "GKE", "Cloud Build"],
        link: ""
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
                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '1rem',
                                        padding: '0.6rem 1.2rem',
                                        backgroundColor: 'rgba(96, 165, 250, 0.15)',
                                        border: '1px solid rgba(96, 165, 250, 0.3)',
                                        borderRadius: '8px',
                                        color: 'var(--accent)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'rgba(96, 165, 250, 0.25)';
                                        e.target.style.borderColor = 'var(--accent)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'rgba(96, 165, 250, 0.15)';
                                        e.target.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                                    }}
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
