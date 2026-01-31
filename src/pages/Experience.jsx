import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: "Operations Engineer Intern",
        company: "Lumen Technologies",
        period: "June 2025 – Present",
        location: "Tempe, Arizona, United States",
        type: "Internship",
        workMode: "Hybrid",
        responsibilities: [
            "Developed a Microsoft Teams AI chatbot for automated ticket troubleshooting using Azure OpenAI, RAG and Python APIs, improving ticket resolution efficiency by 35%.",
            "Built GitLab CI/CD pipelines, leveraging Docker and Ansible for automated deployment of workflows and microservices.",
            "Enhanced a Django-based BGP monitoring portal by implementing secure user authentication and a Configuration Management API.",
            "Owned production deployments, monitoring, alerting, and incident response for critical services."
        ],
        skills: ["Azure OpenAI", "Python", "Docker", "Ansible", "CI/CD", "Django"]
    },
    {
        role: "Cloud and Systems Aide",
        company: "ASU, Research Technology Office",
        period: "Oct 2024 – May 2025",
        location: "Tempe, Arizona, United States",
        type: "Contract",
        workMode: "On-site",
        responsibilities: [
            "Provisioned a production-grade Kubernetes cluster using Rancher and deployed containerized applications with hardened Docker images.",
            "Integrated Trivy vulnerability scanning into CI/CD pipelines and delivered scan alerts to Slack.",
            "Provisioned HIPAA-compliant cloud infrastructure on GCP using Terraform, including networking, IAM, logging and monitoring."
        ],
        skills: ["Kubernetes", "Rancher", "Terraform", "GCP", "Trivy", "CI/CD"]
    },
    {
        role: "Senior Platform Engineer",
        company: "Quantiphi Analytics",
        period: "Jan 2022 – Jul 2024",
        location: "Mumbai, India",
        type: "Full-time",
        workMode: "Remote/On-site",
        responsibilities: [
            "Developed and orchestrated Hadoop data workflows using Google Cloud Composer (Apache Airflow), automating ETL pipelines and increasing data processing efficiency by 25%.",
            "Containerized applications using Docker and deployed them on GKE with Helm, configuring NGINX ingress for traffic management.",
            "Built a Python connector to extract Salesforce documents into GCS and applied entity extraction, deploying the pipeline on Cloud Run.",
            "Performed Linux-based deployment and maintenance of services in private subnets via bastion hosts, ensuring secure access."
        ],
        skills: ["Airflow", "GKE", "Docker", "Helm", "GCP", "Python"]
    }
];

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Professional Experience</h1>

            <div className="timeline-container">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="experience-card">
                            <div className="exp-header">
                                <div className="exp-title-group">
                                    <h3>{exp.role}</h3>
                                    <p className="exp-company">{exp.company}</p>
                                </div>
                                <div className="exp-badges">
                                    <span className="exp-badge">{exp.type}</span>
                                    {exp.award && <span className="exp-badge award">Award</span>}
                                </div>
                            </div>

                            <div className="exp-meta">
                                <span>📅 {exp.period}</span>
                                <span>📍 {exp.location}</span>
                                <span>💼 {exp.workMode}</span>
                            </div>

                            {exp.award && (
                                <div style={{
                                    padding: '0.8rem 1.2rem',
                                    background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.15), rgba(251, 191, 36, 0.08))',
                                    border: '1px solid rgba(250, 204, 21, 0.3)',
                                    borderRadius: '12px',
                                    color: '#fbbf24',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    ⭐ {exp.award}
                                </div>
                            )}

                            <div className="exp-responsibilities">
                                <h4>Key Achievements</h4>
                                <div className="responsibilities-grid">
                                    {exp.responsibilities.map((resp, i) => (
                                        <div key={i} className="responsibility-item">
                                            <p>{resp}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="exp-skills">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
