import { motion } from 'framer-motion';
import Card from '../components/Card';
import './About.css';
import {
    SiPython, SiDart, SiCplusplus, SiKotlin, SiMysql, SiJavascript,
    SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiFlask, SiReact,
    SiHtml5, SiCss3, SiNodedotjs, SiPostgresql, SiMongodb, SiSnowflake,
    SiGit, SiAndroidstudio, SiFlutter, SiPostman, SiGraphql, SiJira
} from 'react-icons/si';
import { FaCode, FaDatabase, FaCloud, FaTasks, FaTools, FaJava, FaAws, FaFileExcel } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';

export default function About() {
    const skillCategories = [
        {
            title: "Programming",
            icon: <FaCode />,
            skills: [
                { name: "Python", icon: <SiPython />, tech: "python" },
                { name: "Dart", icon: <SiDart />, tech: "dart" },
                { name: "C/C++", icon: <SiCplusplus />, tech: "cpp" },
                { name: "Java", icon: <FaJava />, tech: "java" },
                { name: "Kotlin", icon: <SiKotlin />, tech: "kotlin" },
                { name: "SQL", icon: <SiMysql />, tech: "mysql" },
                { name: "JavaScript", icon: <SiJavascript />, tech: "javascript" },
            ]
        },
        {
            title: "Libraries & Frameworks",
            icon: <MdCode />,
            skills: [
                { name: "NumPy", icon: <SiNumpy />, tech: "numpy" },
                { name: "Pandas", icon: <SiPandas />, tech: "pandas" },
                { name: "Scikit-learn", icon: <SiScikitlearn />, tech: "scikit" },
                { name: "TensorFlow", icon: <SiTensorflow />, tech: "tensorflow" },
                { name: "Flask", icon: <SiFlask />, tech: "flask" },
                { name: "React", icon: <SiReact />, tech: "react" },
            ]
        },
        {
            title: "Web & Databases",
            icon: <FaDatabase />,
            skills: [
                { name: "HTML", icon: <SiHtml5 />, tech: "html5" },
                { name: "CSS", icon: <SiCss3 />, tech: "css3" },
                { name: "Node.js", icon: <SiNodedotjs />, tech: "nodejs" },
                { name: "MySQL", icon: <SiMysql />, tech: "mysql" },
                { name: "PostgreSQL", icon: <SiPostgresql />, tech: "postgresql" },
                { name: "MongoDB", icon: <SiMongodb />, tech: "mongodb" },
                { name: "Snowflake", icon: <SiSnowflake />, tech: "snowflake" },
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: <FaCloud />,
            skills: [
                { name: "AWS S3", icon: <FaAws />, tech: "aws" },
                { name: "AWS IAM", icon: <FaAws />, tech: "aws" },
                { name: "AWS Redshift", icon: <FaAws />, tech: "aws" },
                { name: "AWS EC2", icon: <FaAws />, tech: "aws" },
                { name: "CI/CD", icon: <SiGit />, tech: "git" },
                { name: "Git", icon: <SiGit />, tech: "git" },
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <FaTools />,
            skills: [
                { name: "Android Studio", icon: <SiAndroidstudio />, tech: "android" },
                { name: "Flutter", icon: <SiFlutter />, tech: "flutter" },
                { name: "Postman", icon: <SiPostman />, tech: "postman" },
                { name: "RESTful APIs", icon: <FaCode />, tech: "default" },
                { name: "GraphQL", icon: <SiGraphql />, tech: "graphql" },
                { name: "Jira", icon: <SiJira />, tech: "jira" },
                { name: "Advanced Excel", icon: <FaFileExcel />, tech: "excel" },
            ]
        },
        {
            title: "Methodologies",
            icon: <FaTasks />,
            skills: [
                { name: "Agile", icon: <FaTasks />, tech: "default" },
                { name: "Waterfall", icon: <FaTasks />, tech: "default" },
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container about-page"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Ron George</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '900px', lineHeight: '1.8' }}>
                Software Development Engineer with strong Cloud and DevOps expertise. Experienced in building production services, automating CI/CD pipelines, provisioning secure cloud infrastructure with Terraform and GCP/AWS, and deploying containerized applications on Kubernetes. Comfortable designing data pipelines and implementing observability and security best practices.
            </p>

            <h2>Technical Skills</h2>

            <div className="skills-container">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        className="skill-category-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 }}
                    >
                        <div className="category-header-new">
                            <span className="category-icon-new">{category.icon}</span>
                            <h3 className="category-title-new">{category.title}</h3>
                        </div>
                        <div className="skills-list">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-badge"
                                    whileHover={{ scale: 1.08, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="skill-badge-icon" data-tech={skill.tech}>{skill.icon}</span>
                                    <span className="skill-badge-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
