const projectsData = [
  {
    id: "web-development",
    img: "https://img.freepik.com/free-photo/programmer-working-web-development-code-engineer-programming-with-c-coding-website-design-database-management_90220-248.jpg?w=1380",
    title: "Web Development",
    category: "Full Stack Solutions",
    description:
      "Modern web applications built with React, Node.js, and scalable cloud infrastructure.",
    overview: [
      "Our Web Development project showcases cutting-edge full-stack solutions that combine modern frontend technologies with robust backend systems. This project demonstrates our expertise in creating scalable, performant web applications that deliver exceptional user experiences.",
      "The application features responsive design, real-time data synchronization, and advanced security measures. We implemented modern development practices including automated testing, continuous integration, and deployment pipelines.",
      "Key technologies used include React for the frontend, Node.js with Express for the backend, MongoDB for data storage, and AWS for cloud infrastructure. The project includes comprehensive documentation and follows industry best practices.",
    ],
    technologies: [
      { name: "React", percentage: 95 },
      { name: "Node.js", percentage: 90 },
      { name: "MongoDB", percentage: 85 },
      { name: "AWS", percentage: 80 },
      { name: "Docker", percentage: 75 },
      { name: "CI/CD", percentage: 85 },
    ],
    features: [
      "Responsive Design",
      "Real-time Data Sync",
      "User Authentication",
      "API Integration",
      "Performance Optimization",
      "Security Implementation",
    ],
  },
  {
    id: "mobile-app-development",
    img: "https://img.freepik.com/free-photo/mobile-banking-concept-banking-technology-banner-mobile-application-interface-3d-illustration_73903-480.jpg?w=1380",
    title: "Mobile App Development",
    category: "Cross-Platform Apps",
    description:
      "Native and hybrid mobile apps for iOS and Android with sleek UI/UX design.",
    overview: [
      "This mobile application project demonstrates our expertise in cross-platform development, delivering native-like experiences on both iOS and Android platforms. The app features intuitive UI/UX design and seamless performance across all devices.",
      "We utilized React Native for cross-platform compatibility, ensuring consistent functionality and appearance on both platforms. The project includes offline capabilities, push notifications, and integration with various APIs.",
      "The development process followed agile methodologies with regular client feedback and iterative improvements. We implemented comprehensive testing strategies including unit tests, integration tests, and user acceptance testing.",
    ],
    technologies: [
      { name: "React Native", percentage: 95 },
      { name: "Redux", percentage: 90 },
      { name: "Firebase", percentage: 85 },
      { name: "REST APIs", percentage: 88 },
      { name: "SQLite", percentage: 80 },
      { name: "Jest", percentage: 85 },
    ],
    features: [
      "Cross-Platform Compatibility",
      "Offline Mode",
      "Push Notifications",
      "In-App Purchases",
      "Social Integration",
      "Analytics Integration",
    ],
  },
  {
    id: "cloud-solutions",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    title: "Cloud Solutions",
    category: "DevOps & Infrastructure",
    description:
      "Secure and scalable cloud infrastructure powered by modern DevOps tools.",
    overview: [
      "Our Cloud Solutions project represents a comprehensive cloud migration and infrastructure modernization initiative. We successfully migrated legacy systems to a scalable, secure cloud environment while maintaining 99.9% uptime.",
      "The project involved containerization of applications, implementation of microservices architecture, and establishment of robust DevOps pipelines. We utilized Infrastructure as Code (IaC) principles for automated deployments and scaling.",
      "Security was paramount, implementing multi-layer protection including encryption, access controls, and continuous monitoring. The solution provides auto-scaling capabilities and disaster recovery mechanisms.",
    ],
    technologies: [
      { name: "AWS", percentage: 95 },
      { name: "Docker", percentage: 90 },
      { name: "Kubernetes", percentage: 85 },
      { name: "Terraform", percentage: 88 },
      { name: "Jenkins", percentage: 80 },
      { name: "Monitoring Tools", percentage: 85 },
    ],
    features: [
      "Auto-Scaling",
      "Load Balancing",
      "Disaster Recovery",
      "Security Monitoring",
      "Cost Optimization",
      "Performance Monitoring",
    ],
  },
  {
    id: "ai-machine-learning",
    img: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=1380",
    title: "AI & Machine Learning",
    category: "Smart Solutions",
    description:
      "Empowering automation and analytics using advanced machine learning algorithms.",
    overview: [
      "This AI/ML project demonstrates our capabilities in developing intelligent systems that automate complex processes and provide predictive analytics. The solution uses machine learning algorithms to analyze large datasets and generate actionable insights.",
      "We implemented natural language processing for text analysis, computer vision for image recognition, and predictive modeling for forecasting. The system includes real-time processing capabilities and integrates with existing business workflows.",
      "The project follows MLOps best practices with automated model training, deployment, and monitoring. We ensured ethical AI implementation with bias detection and explainable AI features.",
    ],
    technologies: [
      { name: "Python", percentage: 95 },
      { name: "TensorFlow", percentage: 90 },
      { name: "PyTorch", percentage: 85 },
      { name: "Scikit-learn", percentage: 88 },
      { name: "NLP Libraries", percentage: 80 },
      { name: "Computer Vision", percentage: 85 },
    ],
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Real-time Processing",
      "Automated Decision Making",
      "Model Explainability",
    ],
  },
  {
    id: "cybersecurity",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    title: "Cybersecurity",
    category: "Security Solutions",
    description:
      "Enterprise-level protection with robust data encryption and security monitoring.",
    overview: [
      "Our Cybersecurity project involved implementing comprehensive security solutions for enterprise environments. We developed a multi-layered security framework that protects against various cyber threats while ensuring compliance with industry standards.",
      "The solution includes advanced threat detection, real-time monitoring, and automated response mechanisms. We implemented encryption protocols, access control systems, and secure communication channels.",
      "The project features continuous vulnerability assessment, penetration testing, and security awareness training. We established incident response procedures and disaster recovery plans.",
    ],
    technologies: [
      { name: "SIEM Systems", percentage: 95 },
      { name: "Encryption Tools", percentage: 90 },
      { name: "Firewall Systems", percentage: 85 },
      { name: "IDS/IPS", percentage: 88 },
      { name: "Compliance Tools", percentage: 80 },
      { name: "Monitoring Systems", percentage: 85 },
    ],
    features: [
      "Threat Detection",
      "Encryption",
      "Access Control",
      "Incident Response",
      "Compliance Management",
      "Security Monitoring",
    ],
  },
];

export default projectsData;
