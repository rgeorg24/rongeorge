import { motion } from 'framer-motion';
import './Projects.css';

export default function Publications() {
    const pubs = [
        {
            title: 'ARIMA Model for Prediction of Forex Rates',
            journal: 'IOSR Journal of Computer Engineering (IOSR-JCE), Volume 25, Issue 5',
            date: 'Sep 8, 2023',
            abstract: `Forex trading plays an indispensable role in the financial market, and the profit reaped through it are high. The benefits made are subject to the volume exchanged and the currencies in which it is exchanged. Prediction of overseas change rate is quite tough due to the fact of its irregular and nonlinear data. There are many parameters which affect the forex rate prediction like the inflation rates, economic growth, interest rates, government and employment data which makes the prediction of forex rate difficult. The accuracies obtained using forex prediction algorithms had to be significantly improved for monetary gains. This study aims to predict the value of Rupee against US dollar by using Autoregressive Integrated Moving Average (ARIMA) model. Although there are many algorithms that are used in FOREX predictions like Artificial Neural Network (ANN), Sentiment Analysis and Support Vector Machine (SVM), it was found that ARIMA model is desired due to the fact of its most accurate prediction of foreign exchange trading.`,
            link: 'https://www.iosrjournals.org/iosr-jce/papers/Vol25-issue5/Ser-1/B2505010914.pdf'
        },
        {
            title: 'Resolving the Data Imbalance problem in Fraud Detection Using Sampling and Machine Learning Techniques',
            journal: 'Positif Journal, Volume 22, Issue 7',
            date: 'Jul 4, 2022',
            abstract: `The term "class imbalance" refers to a disparity between the fraudulent and non-fraudulent classes. The number of occurrences of the positive class (minority) in class imbalance problems is substantially smaller than the number of cases of the negative class (majority). Due to the fact that the non-fraudulent class is more prevalent and the fraudulent class is uncommon, the latter would be deemed outliers, resulting in misclassification of the minority class. Applications include fraud detection, anomaly detection, oil spill monitoring, spam filtering, network intrusion detection, and clinical applications. The proposed model aims to sample the dataset using random undersampling techniques like Near Miss and random oversampling techniques like SMOTE and ADASYN, after which the balanced dataset will be given to the classifier and the results will be compared and evaluated using performance evaluation metrics.`,
            link: 'https://drive.google.com/file/d/1OSvh4gMrNefCUaZ7JW2Zrh-59OrkmwLG/view'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Publications</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Peer-reviewed and conference publications.
            </p>

            <div className="timeline-container">
                {pubs.map((p, idx) => (
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
                                    <h3>{p.title}</h3>
                                    <p className="project-university">{p.journal}</p>
                                </div>
                                <div className="project-badges">
                                    <span className="project-badge">📅 {p.date}</span>
                                </div>
                            </div>

                            <div className="project-meta">
                                <span>📚 Publication</span>
                            </div>

                            <p className="project-description">{p.abstract}</p>

                            {p.link && (
                                <a
                                    href={p.link}
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
                                    View Publication →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
