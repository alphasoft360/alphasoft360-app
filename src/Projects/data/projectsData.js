const projectsData = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online shopping platform with payment integration and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "TailwindCSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment processing",
      "Order tracking and management",
      "Admin dashboard",
      "Real-time inventory updates",
      "Email notifications"
    ],
    overview: [
      "A comprehensive e-commerce solution built with modern web technologies, providing a seamless shopping experience for customers and robust management tools for administrators.",
      "The platform features a responsive design that works across all devices, with optimized performance and security measures to protect user data and transactions.",
      "Built with scalability in mind, the system can handle thousands of concurrent users and process orders efficiently with real-time inventory management."
    ],
    challenges: [
      "Implementing real-time inventory synchronization across multiple devices",
      "Optimizing database queries for fast product searches",
      "Ensuring PCI compliance for payment processing",
      "Creating a responsive UI that works on all screen sizes"
    ],
    solutions: [
      "Used WebSocket connections for real-time updates",
      "Implemented database indexing and caching strategies",
      "Integrated Stripe as a PCI-compliant payment processor",
      "Adopted mobile-first design principles with TailwindCSS"
    ],
    github: "https://github.com/example/ecommerce-platform",
    liveDemo: "https://example-ecommerce.com",
    completionDate: "2024-03-15",
    client: "TechMart Solutions",
    duration: "4 months"
  },
  {
    id: "task-management-app",
    slug: "task-management-app",
    title: "Task Management App",
    category: "Productivity Tools",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "JWT", "Vuex"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task boards",
      "Team member assignments",
      "File attachments",
      "Time tracking",
      "Progress analytics",
      "Notifications and reminders",
      "Calendar integration"
    ],
    overview: [
      "A powerful task management tool designed for teams to collaborate efficiently on projects with real-time updates and comprehensive project tracking.",
      "The application provides an intuitive interface with Kanban-style boards, Gantt charts, and detailed analytics to monitor project progress.",
      "Built with team productivity in mind, the app includes features like automated workflows, custom fields, and integration with popular tools."
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Handling complex permission systems",
      "Optimizing performance for large datasets",
      "Creating an intuitive drag-and-drop interface"
    ],
    solutions: [
      "Implemented WebSocket connections with Socket.io",
      "Created role-based access control system",
      "Used virtual scrolling and lazy loading",
      "Utilized HTML5 drag-and-drop API with custom enhancements"
    ],
    github: "https://github.com/example/task-manager",
    liveDemo: "https://example-tasks.com",
    completionDate: "2024-02-28",
    client: "ProductiveCo",
    duration: "3 months"
  },
  {
    id: "social-media-dashboard",
    slug: "social-media-dashboard",
    title: "Social Media Dashboard",
    category: "Analytics",
    description: "Analytics dashboard for managing multiple social media accounts with comprehensive reporting.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["React", "D3.js", "Node.js", "MySQL", "Chart.js", "Material-UI"],
    features: [
      "Multi-platform integration",
      "Real-time analytics",
      "Scheduled posting",
      "Engagement tracking",
      "Competitor analysis",
      "Custom reports",
      "Team collaboration",
      "API integrations"
    ],
    overview: [
      "A comprehensive social media management platform that aggregates data from multiple social networks into a unified dashboard.",
      "The system provides detailed analytics, content scheduling, and team collaboration features to help businesses optimize their social media presence.",
      "With advanced reporting capabilities and AI-powered insights, users can make data-driven decisions to improve their social media strategy."
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Processing large volumes of data",
      "Creating responsive data visualizations",
      "Implementing secure authentication with third-party services"
    ],
    solutions: [
      "Built modular API integration system",
      "Implemented data processing pipelines",
      "Used D3.js for custom visualizations",
      "Created OAuth 2.0 authentication flow"
    ],
    github: "https://github.com/example/social-dashboard",
    liveDemo: "https://example-social.com",
    completionDate: "2024-01-20",
    client: "MediaBoost Agency",
    duration: "5 months"
  },
  {
    id: "learning-management-system",
    slug: "learning-management-system",
    title: "Learning Management System",
    category: "Education",
    description: "Online learning platform with video streaming, quizzes, and progress tracking for educational institutions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["Angular", "Spring Boot", "AWS", "MySQL", "WebRTC", "Bootstrap"],
    features: [
      "Video streaming platform",
      "Interactive quizzes and assignments",
      "Progress tracking",
      "Discussion forums",
      "Live video classes",
      "Certificate generation",
      "Mobile app support",
      "Payment integration"
    ],
    overview: [
      "A comprehensive learning management system designed for educational institutions to deliver online courses efficiently.",
      "The platform supports various content types including video lectures, interactive quizzes, and live streaming sessions.",
      "Built with scalability and accessibility in mind, the system serves thousands of students with reliable performance."
    ],
    challenges: [
      "Implementing smooth video streaming",
      "Handling concurrent users in live sessions",
      "Creating accessible UI for all users",
      "Ensuring data security and privacy compliance"
    ],
    solutions: [
      "Used adaptive bitrate streaming with AWS",
      "Implemented WebRTC for low-latency video",
      "Followed WCAG 2.1 accessibility guidelines",
      "Implemented GDPR and FERPA compliance measures"
    ],
    github: "https://github.com/example/lms-platform",
    liveDemo: "https://example-learning.com",
    completionDate: "2023-12-10",
    client: "EduTech Institute",
    duration: "6 months"
  },
  {
    id: "fitness-tracker-app",
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    category: "Health & Fitness",
    description: "Mobile fitness application with workout planning, nutrition tracking, and progress analytics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB", "Redux", "Expo"],
    features: [
      "Workout planning",
      "Nutrition tracking",
      "Progress analytics",
      "Social features",
      "Wearable integration",
      "Personalized recommendations",
      "Video exercise library",
      "Achievement system"
    ],
    overview: [
      "A comprehensive fitness tracking application that helps users achieve their health goals through personalized workout plans and nutrition guidance.",
      "The app integrates with wearable devices to track activity levels and provides detailed analytics to monitor progress over time.",
      "With social features and gamification elements, users stay motivated and engaged in their fitness journey."
    ],
    challenges: [
      "Integrating with various wearable devices",
      "Creating accurate calorie calculation algorithms",
      "Implementing offline functionality",
      "Ensuring data privacy and security"
    ],
    solutions: [
      "Built universal device integration layer",
      "Collaborated with nutritionists for algorithms",
      "Implemented local data storage with sync",
      "Used end-to-end encryption for sensitive data"
    ],
    github: "https://github.com/example/fitness-tracker",
    liveDemo: "https://example-fitness.com",
    completionDate: "2023-11-15",
    client: "FitLife Studios",
    duration: "4 months"
  },
  {
    id: "real-estate-platform",
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    category: "Real Estate",
    description: "Property listing platform with virtual tours, mortgage calculator, and agent matching system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe", "TypeScript"],
    features: [
      "Property listings with advanced search",
      "Virtual property tours",
      "Mortgage calculator",
      "Agent matching system",
      "Document management",
      "Appointment scheduling",
      "Neighborhood insights",
      "Market analytics"
    ],
    overview: [
      "A comprehensive real estate platform that connects buyers, sellers, and agents through an intuitive and feature-rich interface.",
      "The platform includes innovative features like virtual tours, AI-powered property recommendations, and detailed market analytics.",
      "Built with modern web technologies, the system provides fast performance and excellent user experience across all devices."
    ],
    challenges: [
      "Implementing high-quality virtual tours",
      "Creating accurate property valuation models",
      "Handling large image and video files",
      "Integrating with multiple listing services"
    ],
    solutions: [
      "Used 3D virtual tour technology",
      "Implemented machine learning models",
      "Optimized media delivery with CDN",
      "Built custom MLS integration APIs"
    ],
    github: "https://github.com/example/real-estate",
    liveDemo: "https://example-realestate.com",
    completionDate: "2023-10-20",
    client: "PropertyHub Inc.",
    duration: "7 months"
  },
  {
    id: "food-delivery-system",
    slug: "food-delivery-system",
    title: "Food Delivery System",
    category: "Food & Beverage",
    description: "Multi-restaurant food delivery platform with real-time order tracking and driver management.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps", "Stripe"],
    features: [
      "Multi-restaurant support",
      "Real-time order tracking",
      "Driver management",
      "Route optimization",
      "Customer reviews",
      "Loyalty programs",
      "Push notifications",
      "Analytics dashboard"
    ],
    overview: [
      "A comprehensive food delivery platform that connects restaurants, drivers, and customers through an efficient and user-friendly system.",
      "The platform features real-time order tracking, intelligent route optimization, and a seamless ordering experience for customers.",
      "Built with scalability in mind, the system can handle thousands of concurrent orders and provides detailed analytics for business insights."
    ],
    challenges: [
      "Implementing real-time order tracking",
      "Optimizing delivery routes",
      "Handling peak hour traffic",
      "Ensuring food quality during delivery"
    ],
    solutions: [
      "Used WebSocket for real-time updates",
      "Implemented Google Maps optimization API",
      "Built auto-scaling infrastructure",
      "Created temperature tracking system"
    ],
    github: "https://github.com/example/food-delivery",
    liveDemo: "https://example-food.com",
    completionDate: "2023-09-15",
    client: "QuickEats Delivery",
    duration: "5 months"
  },
  {
    id: "booking-management-system",
    slug: "booking-management-system",
    title: "Booking Management System",
    category: "Hospitality",
    description: "Hotel and accommodation booking platform with channel management and revenue optimization.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["Vue.js", "Laravel", "MySQL", "Redis", "Stripe", "TailwindCSS"],
    features: [
      "Room availability management",
      "Channel management",
      "Dynamic pricing",
      "Guest communication",
      "Housekeeping scheduling",
      "Revenue analytics",
      "Multi-language support",
      "Mobile check-in"
    ],
    overview: [
      "A comprehensive booking management system designed for hotels and accommodation providers to streamline operations and maximize revenue.",
      "The platform includes channel management to sync availability across multiple booking sites and dynamic pricing algorithms for revenue optimization.",
      "With features like automated guest communication and housekeeping management, the system helps improve operational efficiency."
    ],
    challenges: [
      "Syncing with multiple booking channels",
      "Implementing dynamic pricing algorithms",
      "Handling high concurrency during peak seasons",
      "Ensuring data consistency across systems"
    ],
    solutions: [
      "Built robust channel management API",
      "Implemented machine learning pricing models",
      "Used Redis for caching and queue management",
      "Created distributed transaction system"
    ],
    github: "https://github.com/example/booking-system",
    liveDemo: "https://example-booking.com",
    completionDate: "2023-08-10",
    client: "HospitalityPro",
    duration: "6 months"
  },
  {
    id: "inventory-management",
    slug: "inventory-management",
    title: "Inventory Management System",
    category: "Business Solutions",
    description: "Warehouse and inventory management solution with barcode scanning and supply chain optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["Angular", "Django", "PostgreSQL", "Docker", "TensorFlow", "Material Design"],
    features: [
      "Barcode scanning",
      "Real-time inventory tracking",
      "Supply chain optimization",
      "Automated reordering",
      "Warehouse analytics",
      "Multi-location support",
      "Mobile app",
      "API integrations"
    ],
    overview: [
      "A sophisticated inventory management system that helps businesses optimize their supply chain and warehouse operations.",
      "The platform includes AI-powered demand forecasting, automated reordering, and real-time tracking across multiple locations.",
      "With barcode scanning and mobile support, warehouse operations become more efficient and error-free."
    ],
    challenges: [
      "Implementing accurate demand forecasting",
      "Integrating barcode scanning hardware",
      "Handling large inventory datasets",
      "Ensuring real-time data synchronization"
    ],
    solutions: [
      "Used TensorFlow for forecasting models",
      "Built universal barcode scanning API",
      "Implemented efficient database indexing",
      "Created real-time sync with WebSocket"
    ],
    github: "https://github.com/example/inventory-system",
    liveDemo: "https://example-inventory.com",
    completionDate: "2023-07-20",
    client: "Logistics Solutions Ltd.",
    duration: "8 months"
  },
  {
    id: "healthcare-portal",
    slug: "healthcare-portal",
    title: "Healthcare Portal",
    category: "Healthcare",
    description: "Patient management system with telemedicine capabilities and electronic health records.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80",
    techStack: ["React", "Python", "Django", "PostgreSQL", "WebRTC", "HIPAA Compliant"],
    features: [
      "Electronic health records",
      "Telemedicine consultations",
      "Appointment scheduling",
      "Prescription management",
      "Billing system",
      "Patient portal",
      "Doctor dashboard",
      "Lab results integration"
    ],
    overview: [
      "A comprehensive healthcare portal that facilitates patient care through telemedicine, electronic health records, and practice management.",
      "The system ensures HIPAA compliance while providing easy access to health information for both patients and healthcare providers.",
      "With features like video consultations and automated appointment reminders, the platform improves healthcare accessibility."
    ],
    challenges: [
      "Ensuring HIPAA compliance",
      "Implementing secure video consultations",
      "Integrating with existing medical systems",
      "Handling sensitive patient data"
    ],
    solutions: [
      "Implemented end-to-end encryption",
      "Used secure WebRTC connections",
      "Built HL7 integration interfaces",
      "Created comprehensive audit trails"
    ],
    github: "https://github.com/example/healthcare-portal",
    liveDemo: "https://example-healthcare.com",
    completionDate: "2023-06-15",
    client: "MediCare Plus",
    duration: "9 months"
  }
];

export default projectsData;
