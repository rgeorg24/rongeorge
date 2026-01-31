import resumePDF from './assets/Ron George Resume.pdf';
import profilePic from '../assets/750b0626-048d-4461-b072-28861900432d.JPG';

export const achievements = [
    {
        achievementName: 'Organizer of FRCRCE Unscript2K20 State level Hackathon held in college.',
        achievementDate: "(Oct'20)"
    },
    {
        achievementName: 'Led as the Event Head of CodeLabs Coding Council at FRCRCE in 2020-21.',
        achievementDate: "(Jul'20-Jun'21)"
    },
    {
        achievementName: 'Led as the Design Head of CodeLabs Coding Council at FRCRCE in 2019-20.',
        achievementDate: "(Jul'19-Jun'20)"
    },
    {
        achievementName: 'SSC Topper of Palghar City with a percentage of 96.2%.',
        achievementDate: "(Apr'16)"
    }
];

export const profile = {
    name: "Ron George",
    alias: "Ron",
    role: "Software Development Engineer | Cloud & DevOps",
    email: "ron.george.336@gmail.com",
    location: "Tempe, AZ, USA",
    profilePic: profilePic,
    resumeUrl: resumePDF,
    roles: ["Software Developer Intern @ Superstars", "BTS Data Engineering Intern @ ZS (2024)", "SCAI Grader @ ASU"],
    social: {
        linkedin: "https://linkedin.com/in/rongeorge74/",
        github: "https://github.com/rongeorge74",
        leetcode: "https://leetcode.com/u/rongeorge74/",
        resume: "/resume.pdf"
    },
    about: "Software Development Engineer with Cloud and DevOps expertise. Experienced in building production services, automating CI/CD, provisioning cloud infrastructure with Terraform, and operating containerized workloads on Kubernetes.",
    skills: [
        "Flutter/Dart", "Python", "Java", "C/C++", "SQL",
        "React", "Flask", "GitHub Actions", "Postman",
        "Snowflake", "Informatica IICS", "REST APIs",
        "Android Studio", "MongoDB/Realm", "MySQL"
    ],
    experience: [
        {
            role: "SCAI Grader",
            company: "Arizona State University",
            location: "Tempe, AZ (Hybrid)",
            period: "Aug 2025 – Present",
            description: [
                "Grader for CSE 469 (Computer & Network Forensics) and CSE 543 (Information Assurance & Security).",
                "Built Python sanity checks for hash/auth tasks; standardized rubrics via Gradescope."
            ]
        },
        {
            role: "Software Developer Intern",
            company: "Get SuperStars Inc.",
            location: "Remote",
            period: "May 2025 – Aug 2025",
            description: [
                "Shipped Stories & Action Feed modules in Flutter/Dart with REST integrations.",
                "Profiled UI and optimized caching; strengthened CI via GitHub Actions + Postman tests."
            ]
        },
        {
            role: "Business Technology Solutions Associate Intern",
            company: "ZS Associates",
            location: "Gurugram, India",
            period: "Jan 2024 – July 2024",
            description: [
                "Designed multi‑layer Snowflake DWH; developed IICS pipelines for 70+ vendor feeds.",
                "Added SQL‑based DQ checks and reporting views; supported legacy→cloud migration."
            ]
        },

    ],
    education: [
        {
            school: "Arizona State University",
            degree: "Master of Science Computer Science",
            location: "Tempe, AZ",
            period: "Aug 2024 – May 2026",
            gpa: "4.18/4.0",
            courses: {
                "Fall 2024": ["CSE 511 Data Processing at Scale", "CSE 578 Data Visualization", "CSE 579 Knowledge Representation and Reasoning"],
                "Spring 2025": ["CSE 475 Foundations of Machine Learning", "CSE 546 Cloud Computing", "CSE 598 Engineering Blockchain Applications"],
                "Fall 2025": ["CSE 539 Applied Cryptography", "CSE 573 Semantic Web Mining", "CSE 598 Statistical Learning Theory"],
                "Spring 2026": ["CSE 575 Statistical Machine Learning"]
            }
        },
        {
            school: "Fr. Conceicao Rodrigues College of Engineering, Mumbai University",
            degree: "Bachelor of Engineering - Computer Engineering",
            location: "India",
            period: "2018 – 2022",
            gpa: "9.21/10",
            courses: {},
            activities: ["Codelabs Coding Council CRCE", "Unscript2K20", "Synergy"]
        }
    ],
    projects: [
        {
            name: "GenAI Invoice Data Extractor",
            tech: "Python, Streamlit, Google Gemini Vision, Docker, Cloud Run",
            period: "2025",
            description: "Developed an Invoice Analysis application using Python and Streamlit integrated with Google Gemini Pro Vision API to analyze invoice images and extract structured invoice data. Containerized and deployed on GCP Cloud Run.",
            link: "#"
        },
        {
            name: "Handling Class Imbalance in Fraud Detection",
            tech: "Python, scikit-learn",
            period: "2024",
            description: "Addressed class imbalance in fraud detection by applying sampling techniques and evaluating classifiers (KNN, Random Forest), producing a high-performing model (reported accuracy ~99.94%).",
            link: "#"
        },
        {
            name: "Nutritionist Generative AI Doctor",
            tech: "Python, Streamlit, Google Gemini Vision, Docker, Cloud Run",
            period: "2025",
            description: "Built a food recognition app using Google Gemini Pro Vision to analyze uploaded food images, estimate calorie content, and surface nutrition info. Containerized and deployed to GCP Cloud Run.",
            link: "#"
        },
        {
            name: "Personal Portfolio Website",
            tech: "React, Docker, GCP Cloud Run, Firebase, Cloud DNS",
            period: "2024",
            description: "Created a personal portfolio site in React, containerized with Docker and deployed on GCP Cloud Run. Also hosted via Firebase with DNS redirect to Cloud Run.",
            link: "#"
        },
        {
            name: "User Portal Application",
            tech: "React, Docker, Cloud Build, GKE",
            period: "2024",
            description: "Developed a user portal in React, containerized the app, implemented CI/CD with Cloud Build, and deployed to Google Kubernetes Engine for scalable production deployment.",
            link: "#"
        }
    ],
    publications: [
        {
            title: "ARIMA Model for Prediction of Forex Rates",
            venue: "IOSR Journal of Computer Engineering (IOSR-JCE), Volume 25, Issue 5",
            date: "Sep 8, 2023",
            abstract: "Prediction of exchange rates is difficult due to irregular and nonlinear data influenced by inflation, economic growth, interest rates, employment and government data. This study predicts the value of the Rupee against the US dollar using an Autoregressive Integrated Moving Average (ARIMA) model."
        },
        {
            title: "Resolving the Data Imbalance problem in Fraud Detection Using Sampling and Machine Learning Techniques",
            venue: "Positif Journal, Volume 22, Issue 7",
            date: "Jul 4, 2022",
            abstract: "This work addresses class imbalance in fraud detection by applying undersampling and oversampling techniques (NearMiss, SMOTE, ADASYN) and evaluating classifiers (KNN, Random Forest), comparing performance across sampling strategies."
        }
    ],
    certifications: [
        {
            name: 'GCP Professional Cloud Developer',
            issuer: 'Google Cloud',
            date: 'June, 2023',
            link: 'https://www.credential.net/5da15166-dfb1-48c4-9c23-a70ac1da5a26#gs.zz9dfu'
        },
        {
            name: 'HashiCorp: Terraform Associate (002)',
            issuer: 'HashiCorp',
            date: 'February, 2023',
            link: 'https://www.credly.com/badges/e276d7d2-8401-497d-826f-ba3ddc58025b/public_url'
        },
        {
            name: 'GCP Associate Cloud Engineer',
            issuer: 'Google Cloud',
            date: 'June, 2022',
            link: 'https://www.credential.net/63cb43d5-60e4-4f8f-a1b0-d224f1068dd4'
        },
        {
            name: 'DevSecOps with Gitlab',
            issuer: 'Udemy',
            date: 'September, 2023',
            link: 'https://drive.google.com/file/d/1GRoBRJrhjn9X68PHKGF5VwW_LBN5L0oq/view'
        },
        {
            name: 'Docker for Absolute Beginner',
            issuer: 'Udemy',
            date: 'March, 2023',
            link: 'https://drive.google.com/file/d/1_JcA527LolT1t1SN-9cmHZAAdaRJPfYg/view'
        },
        {
            name: 'GenerativeAI for Beginners',
            issuer: 'Udemy',
            date: 'July, 2024',
            link: 'https://drive.google.com/file/d/1n-nk2AnfnSXJoqVy-NJBvdyYVmcOPgnM/view'
        }
    ],
    recommendations: [
        
    ]
    ,
    achievements: achievements
};
