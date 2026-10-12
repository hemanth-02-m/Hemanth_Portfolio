import type {
  PersonalInfo,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  ResumeTrack,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Hemanth Eagambaram M',
  fullName: 'Hemanth Eagambaram Muthappa',
  wordmark: 'HEMANTH',
  role: 'Software Developer • AI, Data & Cloud Engineer',
  location: 'Hosur, Tamil Nadu, India',
  email: 'iamhemantheagambaram@gmail.com',
  phone: '8940726086',
  linkedin: 'https://linkedin.com/in/hemanth-02-m',
  github: 'https://github.com/hemanth-02-m',
  photoUrl: './hemanth-photo.jpg',
  resumePdfPath: './Hemanth_Eagambaram_Resume.pdf',
  availability: 'Open to Entry-Level Engineering Roles',
  graduationDate: 'May 2027',
  cgpa: '8.00',
  shortBio:
    'I’m Hemanth Eagambaram, a Computer Science & Engineering student passionate about building scalable software applications, intelligent AI/ML systems, reliable data workflows, and cloud-ready architectures using Java, Python, SQL, React.js, and AWS.',
  detailedBio: [
    'I am a Computer Science and Engineering undergraduate at Er. Perumal Manimekalai College of Engineering, Hosur (graduating in May 2027 with an 8.00 CGPA), driven by a passion for end-to-end software development, problem-solving, and modern system architecture.',
    'My core foundation is built on Data Structures & Algorithms (with 200+ problems solved on LeetCode), Object-Oriented Programming in Java and Python, and full-stack application development using FastAPI, Flask, React.js, HTML, CSS, JavaScript, and REST APIs.',
    'Across my projects and training, I have engineered multi-model AI/ML detection pipelines (DistilBERT + XGBoost achieving a 97.1% F1-score), interactive geospatial React dashboards, and advanced relational SQL analytics during my hands-on trainee stint at Growwpark Technologies.',
    'As an AWS Academy Graduate in Cloud Architecting with hands-on exposure to AWS (EC2, S3, VPC, IAM, RDS) and distributed data processing (PySpark, Apache Spark, Azure Databricks), I am eager to contribute to an engineering team across software development, backend/full-stack, data, or cloud roles.',
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    description: 'Core languages for algorithms, object-oriented systems, scripting, and querying.',
    skills: [
      { name: 'Java', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'JavaScript' },
    ],
  },
  {
    title: 'Web, Backend & APIs',
    iconName: 'Layers',
    description: 'Building responsive frontend interfaces and high-performance RESTful backend services.',
    skills: [
      { name: 'FastAPI', highlight: true },
      { name: 'Flask', highlight: true },
      { name: 'React.js', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'AI, Machine Learning & NLP',
    iconName: 'Sparkles',
    description: 'Semantic text analysis, feature engineering, and predictive classification models.',
    skills: [
      { name: 'Machine Learning', highlight: true },
      { name: 'NLP', highlight: true },
      { name: 'DistilBERT', highlight: true },
      { name: 'XGBoost', highlight: true },
      { name: 'Scikit-learn' },
    ],
  },
  {
    title: 'Data Engineering & Databases',
    iconName: 'DatabaseZap',
    description: 'Relational database management, analytical SQL, and distributed data processing.',
    skills: [
      { name: 'MySQL', highlight: true },
      { name: 'SQL Server', highlight: true },
      { name: 'PySpark', highlight: true },
      { name: 'Apache Spark' },
      { name: 'ETL & Data Transformation', highlight: true },
      { name: 'Data Cleaning' },
    ],
  },
  {
    title: 'Cloud & Platforms',
    iconName: 'Cloud',
    description: 'Cloud compute, storage, virtual networking, security, and analytics workspaces.',
    skills: [
      { name: 'AWS', highlight: true },
      { name: 'Amazon EC2', highlight: true },
      { name: 'Amazon S3', highlight: true },
      { name: 'Amazon VPC' },
      { name: 'AWS IAM' },
      { name: 'Amazon RDS' },
      { name: 'Azure Databricks' },
    ],
  },
  {
    title: 'CS Fundamentals & Tools',
    iconName: 'Binary',
    description: 'Algorithmic thinking, system fundamentals, and collaborative version control.',
    skills: [
      { name: 'Data Structures & Algorithms', highlight: true },
      { name: 'Object-Oriented Programming (OOP)', highlight: true },
      { name: 'Computer Networks' },
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'phishing-scam-detection',
    title: 'AI-Based Phishing & Scam Detection System',
    tagline: 'Real-time modular threat detection for phishing emails, messages, and malicious URLs.',
    category: 'ml-ai',
    categoryLabel: 'AI / ML & Backend Systems',
    status: 'Completed',
    githubUrl: 'https://github.com/hemanth-02-m/Phishing_and_Scam_Detection',
    f1Score: '97.1%',
    description:
      'An AI-based detection system designed to identify phishing emails, fraudulent messages, and malicious URLs using natural language processing, machine learning, and rule-based detection.',
    problem:
      'Phishing attacks continuously evolve across multiple vectors—both deceptive natural language in messages and obfuscated URL structures—making single-method heuristics insufficient.',
    approach:
      'Designed a modular, real-time detection system: DistilBERT performs semantic text analysis on emails and messages, XGBoost classifies URLs using engineered lexical and domain features, and a deterministic rule-based engine provides fast-path signature filtering via a FastAPI backend.',
    technologies: [
      'Python',
      'DistilBERT',
      'XGBoost',
      'NLP',
      'Machine Learning',
      'FastAPI',
      'Scikit-learn',
    ],
    keyHighlights: [
      'Achieved a 97.1% F1-score and designed the system for real-time, modular, and scalable threat detection.',
      'Used DistilBERT for deep semantic text analysis of phishing emails and messages.',
      'Implemented XGBoost for malicious URL classification using engineered lexical and structural URL features.',
      'Integrated deterministic rule-based detection as an additional security guardrail.',
      'Built a clean FastAPI service layer to expose low-latency REST endpoints for inference.',
    ],
    deploymentNote:
      'Architected as a modular FastAPI service ready for cloud deployment on AWS EC2.',
    architectureSteps: [
      {
        label: 'Request Ingestion',
        tech: 'FastAPI / Python',
        detail: 'Parses incoming email/message text and extracts embedded URLs.',
      },
      {
        label: 'Semantic Text Analysis',
        tech: 'DistilBERT (NLP)',
        detail: 'Evaluates contextual intent and manipulative social engineering phrasing.',
      },
      {
        label: 'URL Classification',
        tech: 'XGBoost',
        detail: 'Analyzes engineered URL features (length, entropy, suspicious tokens).',
      },
      {
        label: 'Rule-Based Engine',
        tech: 'Heuristic Filter',
        detail: 'Executes deterministic checks against known phishing signatures.',
      },
      {
        label: 'Threat Verdict',
        tech: 'Ensemble Output',
        detail: 'Aggregates confidence scores to return a real-time threat classification.',
      },
    ],
  },
  {
    id: 'urban-heat-prediction',
    title: 'AI-Based Urban Heat Prediction & Cooling System',
    tagline: 'Full-stack spatial heat-risk classification dashboard with an AI cooling advisor.',
    category: 'cloud-system',
    categoryLabel: 'Full-Stack & Machine Learning',
    status: 'Completed',
    githubUrl: 'https://github.com/hemanth-02-m/heat_prediction',
    description:
      'An ML-based full-stack application that classifies urban areas into Low, Medium, and High heat-risk zones, featuring an interactive spatial heat-map dashboard and an NLP chatbot for cooling recommendations.',
    problem:
      'Urban heat islands create localized high-temperature risk zones that require clear spatial visualization and actionable mitigation guidance for urban planning.',
    approach:
      'Developed a machine learning classification backend in Python and Flask REST APIs to categorize urban zones into Low, Medium, and High heat risk, paired with an interactive React.js heat-map frontend and an NLP chatbot for cooling recommendations.',
    technologies: [
      'Python',
      'React.js',
      'Flask',
      'REST APIs',
      'Machine Learning',
      'NLP',
    ],
    keyHighlights: [
      'Developed an ML-based system to classify urban areas into Low, Medium, and High heat-risk zones.',
      'Built an interactive React.js heat-map dashboard for spatial visualization and identification of heat-prone areas.',
      'Implemented an AI-driven cooling recommendations system integrated with an NLP Chatbot.',
      'Designed clean Flask REST APIs connecting the machine learning inference layer with the frontend UI.',
    ],
    architectureSteps: [
      {
        label: 'Environmental Inputs',
        tech: 'Python / Data Prep',
        detail: 'Processes urban temperature and spatial zone parameters.',
      },
      {
        label: 'Heat-Risk Classifier',
        tech: 'Machine Learning',
        detail: 'Classifies urban sectors into Low, Medium, and High heat-risk zones.',
      },
      {
        label: 'Backend API Layer',
        tech: 'Flask REST APIs',
        detail: 'Serves spatial risk predictions and recommendation payloads.',
      },
      {
        label: 'Interactive Dashboard',
        tech: 'React.js',
        detail: 'Renders the spatial heat-map visualization for identifying heat-prone areas.',
      },
      {
        label: 'Advisory Chatbot',
        tech: 'NLP Engine',
        detail: 'Provides interactive AI-driven urban cooling recommendations.',
      },
    ],
  },
  {
    id: 'data-engineering-practice',
    title: 'SQL Analytics & Distributed Data Workflows',
    tagline: 'Relational query optimization, ETL transformations, and PySpark / Cloud exploration.',
    category: 'data-engineering',
    categoryLabel: 'Data Engineering & SQL',
    status: 'Practice / Exploring',
    description:
      'Hands-on technical work spanning advanced relational SQL data analysis, complex query patterns (JOINs, CTEs, window functions), and distributed batch processing with PySpark, Apache Spark, and Azure Databricks.',
    problem:
      'Raw operational datasets require rigorous cleaning, schema standardization, and multi-stage analytical querying to produce reliable business metrics.',
    approach:
      'Combining strong SQL query engineering (practiced during industry trainee experience) with distributed DataFrame transformations in PySpark and Azure Databricks to build structured, analytics-ready datasets.',
    technologies: [
      'SQL',
      'Python',
      'PySpark',
      'Apache Spark',
      'Azure Databricks',
      'MySQL',
      'AWS S3',
    ],
    keyHighlights: [
      'Complex analytical SQL querying using JOINs, CTEs, subqueries, and window functions.',
      'Data cleaning, schema enforcement, and structured transformations using Python and PySpark.',
      'Exploring distributed execution and lakehouse patterns in Apache Spark and Azure Databricks.',
      'Applying AWS cloud storage and database fundamentals (S3, RDS, EC2, IAM).',
    ],
    isUpcomingPlaceholder: true,
    architectureSteps: [
      {
        label: 'Source Ingestion',
        tech: 'SQL / Python / S3',
        detail: 'Extracts raw relational tables and batch files from storage.',
      },
      {
        label: 'Data Cleaning & ETL',
        tech: 'PySpark / Pandas',
        detail: 'Handles missing values, standardizes types, and deduplicates records.',
      },
      {
        label: 'Distributed Processing',
        tech: 'Apache Spark / Databricks',
        detail: 'Executes partitioned transformations and aggregations.',
      },
      {
        label: 'Analytical Querying',
        tech: 'SQL (CTEs & Windows)',
        detail: 'Computes rankings, rolling metrics, and multi-table joins.',
      },
      {
        label: 'Business Insights',
        tech: 'Reporting Views',
        detail: 'Delivers clean, structured outputs for decision-making.',
      },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Data Analysis using SQL Trainee',
    company: 'Growwpark Technologies Private Limited',
    location: 'Hosur, Tamil Nadu',
    period: 'June 2026 – July 2026',
    type: 'Hands-on Technical Training',
    description:
      'Completed hands-on SQL training in data analysis and database management, utilizing JOINs, CTEs, subqueries, window functions, and data transformation techniques to analyze datasets and generate business insights.',
    responsibilities: [
      'Wrote complex multi-table JOINs, subqueries, and Common Table Expressions (CTEs) to query relational databases efficiently.',
      'Utilized SQL window functions (ROW_NUMBER, RANK, DENSE_RANK, aggregate partitions) for comparative and trend analysis.',
      'Applied structured data transformation and cleaning techniques to prepare raw tables for business reporting.',
      'Analyzed datasets to uncover actionable patterns and generate clear business insights.',
    ],
    technologies: ['SQL', 'MySQL', 'SQL Server', 'Data Transformation', 'Database Management'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Er. Perumal Manimekalai College of Engineering',
    location: 'Hosur, Tamil Nadu',
    period: 'Oct 2023 – May 2027',
    score: '8.00 CGPA',
    scoreLabel: 'Current CGPA',
    isPrimary: true,
    highlights: [
      'Core coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Computer Networks.',
      'Solved 200+ LeetCode problems and won collegiate awards in application development and technical quizzes.',
      'Consistent academic track record with an 8.00 CGPA.',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC - Class XII)',
    institution: 'R.V Government Boys Higher Secondary School',
    location: 'Hosur, Tamil Nadu',
    period: 'May 2023',
    score: '75.6%',
    scoreLabel: 'Percentage',
    isPrimary: false,
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC - Class X)',
    institution: 'Government High School',
    location: 'Mookandapalli, Tamil Nadu',
    period: 'May 2021',
    score: '100%',
    scoreLabel: 'Percentage',
    isPrimary: false,
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'AWS Academy Graduate – Cloud Architecting',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    credentialUrl:
      'https://www.credly.com/badges/491a3e30-2fef-47e9-8adb-44870abec13f/public_url',
    description:
      'Trained in designing scalable, reliable cloud architectures on AWS, including EC2 compute, S3 storage, VPC networking, IAM security, and RDS relational databases.',
  },
];

export const achievements: AchievementItem[] = [
  {
    title: 'Solved 200+ LeetCode Problems (DSA)',
    event: 'Algorithmic Problem Solving',
    organization: 'LeetCode',
    year: '2024 – Present',
    metric: '200+ Solved',
    description:
      'Consistent practice in Data Structures and Algorithms covering arrays, strings, hashing, trees, graphs, two pointers, and dynamic programming.',
  },
  {
    title: '1st Place – App Development Competition',
    event: 'APPXLR8’2k24',
    organization: 'Er. Perumal Manimekalai College of Engineering, Hosur',
    year: 'November 2024',
    placement: '1st Place Winner',
    description:
      'Secured 1st Place (Team Tech Titans) in the collegiate Mobile App Development Competition for designing and developing the "Emergency Portal" application.',
    media: [
      {
        label: 'Certificate',
        type: 'certificate',
        url: './achievements/appxlr8-certificate.jpg',
        caption:
          'Certificate of Excellence — 1st Place in Mobile App Development for the app "Emergency Portal" at APPXLR8’2K24, PMC Tech, Hosur (5th November 2024).',
      },
      {
        label: 'Event Photo',
        type: 'photo',
        url: './achievements/appxlr8-ceremony.jpg',
        caption:
          'Receiving the 1st Place prize and certificate at the APPXLR8’2K24 college event.',
      },
    ],
  },
  {
    title: '2nd Place – Technical Quiz',
    event: 'National Level IT Fest – Login 2k26',
    organization: 'Christ College of Science and Management',
    year: 'March 2026',
    placement: '2nd Place Runner-up',
    description:
      'Secured 2nd Place in the National Level IT Fest Technical Quiz testing core computer science, software engineering, and analytical concepts.',
    media: [
      {
        label: 'Certificate',
        type: 'certificate',
        url: './achievements/login2k26-certificate.jpg',
        caption:
          'Certificate of Appreciation — 2nd Place in the Technical Quiz event at National Level IT Fest LOGIN 2K26, Christ College of Science and Management (6th March 2026).',
      },
      {
        label: 'Event Photo',
        type: 'photo',
        url: './achievements/login2k26-ceremony.jpg',
        caption:
          'Receiving the 2nd Place prize and certificate at the LOGIN 2K26 event.',
      },
    ],
  },
];

export const resumeTracks: ResumeTrack[] = [
  {
    id: 'software-developer',
    label: 'Software Engineer Resume',
    roleTitle: 'Aspiring Software Developer',
    pdfPath: './Hemanth_Eagambaram_Resume.pdf',
    downloadName: 'Hemanth_Eagambaram_Resume.pdf',
    objective:
      'Aspiring Software Developer seeking an entry-level opportunity to apply technical skills and contribute to developing efficient, reliable software solutions.',
    skillRows: [
      { category: 'Programming Languages', items: 'Java, Python, SQL' },
      { category: 'Core Fundamentals', items: 'Data Structures & Algorithms, OOP, Computer Networks' },
      { category: 'Web Technologies', items: 'HTML, CSS, JavaScript' },
      { category: 'Databases', items: 'MySQL, SQL Server' },
      { category: 'Cloud', items: 'AWS (EC2, S3, VPC, IAM, RDS)' },
      { category: 'Version Control', items: 'Git, GitHub' },
    ],
  },
];

