import { motion } from 'framer-motion';
import './Education.css';

const asuCourses = {};

const snuCourses = {};

export default function Education() {
    const educationData = [
        {
            school: "Arizona State University",
            degree: "Master of Science - Computer Science",
            period: "Aug 2024 – May 2026",
            location: "Tempe, Arizona, United States",
            gpa: "4.18/4.0",
            courses: asuCourses
        },
        {
            school: "Fr. Conceicao Rodrigues College of Engineering, Mumbai University",
            degree: "Bachelor of Engineering - Computer Engineering",
            period: "2018 – 2022",
            location: "India",
            gpa: "9.21/10",
            courses: snuCourses,
            activities: ["Codelabs Coding Council CRCE", "Unscript2K20", "Synergy"]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Education</h1>

            <div className="education-timeline">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="education-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="education-card">
                            <div className="edu-header">
                                <h2>{edu.school}</h2>
                                <p className="edu-degree">{edu.degree}</p>
                            </div>

                            <div className="edu-meta">
                                <span>📅 {edu.period}</span>
                                <span>📍 {edu.location}</span>
                                <span className="gpa-badge">⭐ GPA: {edu.gpa}</span>
                            </div>

                            {Object.entries(edu.courses).map(([key, items], catIdx) => (
                                <div key={key} className="courses-section">
                                    <h3 className="course-category-title">{key}</h3>
                                    <div className="courses-grid">
                                        {items.map((course, i) => (
                                            <motion.div
                                                key={i}
                                                className="course-card"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.03 }}
                                            >
                                                <span className="course-code">{course.code}</span>
                                                <p className="course-name">{course.name}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {edu.activities && edu.activities.length > 0 && (
                                <div className="activities-section" style={{ marginTop: '1rem' }}>
                                    <h3 className="course-category-title">Activities & Societies</h3>
                                    <ul style={{ marginTop: '0.5rem' }}>
                                        {edu.activities.map((a, i) => (
                                            <li key={i}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
