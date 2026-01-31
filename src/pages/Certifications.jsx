import { motion } from 'framer-motion';
import './Certifications.css';

export const certificationsInfo = [
    { 
        certificationName: 'GCP Professional Cloud Developer',
        issuedOn: 'June, 2023',
        issuingOrganization: 'Google Cloud',
        imageUrl: '/images/gcp-logo.png',        
        credentialUrl: 'https://www.credential.net/5da15166-dfb1-48c4-9c23-a70ac1da5a26#gs.zz9dfu'
    },
    { 
        certificationName: 'HashiCorp: Terraform Associate (002)',
        issuedOn: 'February, 2023',
        issuingOrganization: 'HashiCorp',
        imageUrl: '/images/hashicorp.png', 
        credentialUrl: 'https://www.credly.com/badges/e276d7d2-8401-497d-826f-ba3ddc58025b/public_url'
    },
    { 
        certificationName: 'GCP Associate Cloud Engineer',
        issuedOn: 'June, 2022',
        issuingOrganization: 'Google Cloud',
        imageUrl: '/images/gcp-logo.png',
        credentialUrl: 'https://www.credential.net/63cb43d5-60e4-4f8f-a1b0-d224f1068dd4'
    },
    { 
        certificationName: 'DevSecOps with Gitlab',
        issuedOn: 'September, 2023',
        issuingOrganization: 'Udemy',
        imageUrl: '/images/udemy-logo.png', 
        credentialUrl: 'https://drive.google.com/file/d/1GRoBRJrhjn9X68PHKGF5VwW_LBN5L0oq/view'
    },
    { 
        certificationName: 'Docker for Absolute Beginner',
        issuedOn: 'March, 2023',
        issuingOrganization: 'Udemy',
        imageUrl: '/images/udemy-logo.png', 
        credentialUrl: 'https://drive.google.com/file/d/1_JcA527LolT1t1SN-9cmHZAAdaRJPfYg/view'
    },
    { 
        certificationName: 'GenerativeAI for Beginners',
        issuedOn: 'July, 2024',
        issuingOrganization: 'Udemy',
        imageUrl: '/images/udemy-logo.png', 
        credentialUrl: 'https://drive.google.com/file/d/1n-nk2AnfnSXJoqVy-NJBvdyYVmcOPgnM/view'
    }
];

const certifications = certificationsInfo.map(c => ({
    name: c.certificationName,
    issuer: c.issuingOrganization,
    date: c.issuedOn,
    link: c.credentialUrl,
    image: c.imageUrl
}));

export default function Certifications() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Certifications</h1>

            <div className="certifications-timeline">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        className="cert-timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="cert-timeline-marker">
                            <div className="cert-timeline-dot"></div>
                            <div className="cert-timeline-line"></div>
                        </div>

                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certification-card"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <div className="cert-header">
                                <h3 className="cert-title">{cert.name}</h3>
                                <span className="cert-date-badge">📅 {cert.date}</span>
                            </div>

                            <p className="cert-issuer">{cert.issuer}</p>

                            <div className="cert-link-indicator">
                                View Certificate
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </div>
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
