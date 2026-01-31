import { motion } from 'framer-motion';
import resumePDF from '../../assets/Ron George Resume.pdf';
import './Resume.css';

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="resume-page container"
            style={{ paddingTop: '120px', paddingBottom: '3rem' }}
        >
            <div className="resume-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <h1>Resume — Ron George</h1>
                <motion.a
                    href={resumePDF}
                    download
                    className="download-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Download PDF
                </motion.a>
            </div>

            <div className="resume-viewer" style={{ marginTop: '1.5rem' }}>
                <iframe
                    src={resumePDF}
                    title="Resume PDF"
                    className="pdf-iframe"
                    style={{ width: '100%', height: '80vh', border: '1px solid var(--muted)' }}
                />
            </div>
        </motion.div>
    );
}
