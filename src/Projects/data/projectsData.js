// Import project images
import auracart from '../../assets/img/projects/AuraCart.png';
import pop from '../../assets/img/projects/POP.png';
import findhere from '../../assets/img/projects/findhere.png';
import isStartup from '../../assets/img/projects/isStartup.png';
import Kidezz from '../../assets/img/projects/Kidezz.png';
import skillorbit from '../../assets/img/projects/skillorbit.png';
import dhahween from '../../assets/img/projects/ذهويّن.png';
import Shoeto from "../../assets/img/projects/Shoeto.png"

const projectsData = [
  // project 1
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Aura Cart Store",
    description: "Aura Cart Store is your ultimate destination for premium, high-quality products, offering a seamless online shopping experience. With fast shipping, easy returns, and an intuitive interface, we aim to deliver a hassle-free shopping journey.",
    image: auracart,
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "TailwindCSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with advanced search and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Real-time order tracking and management",
      "Admin dashboard with full control over products and orders",
      "Real-time inventory updates",
      "Automated email notifications for users"
    ],
    overview: [
      "Aura Cart Store is a cutting-edge e-commerce platform built with modern web technologies. The platform provides a seamless and secure shopping experience for customers, while offering powerful tools for administrators to manage products, orders, and customers efficiently.",
      "Responsive Design: The platform is designed to provide a flawless shopping experience across all devices",
      "Performance & Security: Optimized for fast load times and built with robust security measures to protect user data and transactions.",
      "Scalable Architecture: The system is built to handle thousands of concurrent users, with efficient order processing and real-time inventory updates."
    ],
    challenges: [
      "Ensuring real-time inventory synchronization across multiple devices",
      "Optimizing database queries for fast, efficient product searches",
      "Maintaining PCI compliance for secure payment processing",
      "Designing a responsive and mobile-friendly user interface for all screen sizes"
    ],
    solutions: [
      "Real-time updates: Utilized WebSocket connections to keep inventory and order data synchronized across devices.",
      "Database Optimization: Implemented indexing and caching strategies to optimize search speed and system performance.",
      "PCI Compliance: Integrated Stripe as the payment processor, ensuring secure and compliant transactions.",
      "Responsive Design: Applied mobile-first design principles using TailwindCSS to ensure a seamless experience on all screen sizes."
    ],
    duration: "4 months",
    category: "E-Commerce"
  },
  // project 2
  {
    id: "task-management-app",
    slug: "task-management-app",
    title: "Shop 'N Hop App",
    description: "Shop 'N Hop App: Discover amazing deals, track your purchases, and shop effortlessly on-the-go. Your personalized shopping experience, anytime, anywhere!",
    image: pop,
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
      "A powerful task management tool designed for teams to collaborate seamlessly on projects with real-time updates and detailed tracking.",
      "The app features an intuitive interface with Kanban boards, Gantt charts, and comprehensive analytics to monitor project progress.",
      "Optimized for team productivity, the app includes automated workflows, custom fields, and integration with popular tools."
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Handling complex permission systems",
      "Optimizing performance for large datasets",
      "Creating an intuitive drag-and-drop interface"
    ],
    solutions: [
      "Implemented WebSocket connections with Socket.io for real-time synchronization",
      "Created a role-based access control (RBAC) system to manage user permissions",
      "Used virtual scrolling and lazy loading to optimize performance for large datasets",
      "Utilized HTML5 drag-and-drop API with custom enhancements for a smooth user interface"
    ],
    duration: "3 months",
    category: "Mobile App"
  },
  // project 3
  {
    id: "home-accessories",
    slug: "home-accessories",
    title: "Find-Here App",
    description: "Find-Here App is your ultimate tool for locating businesses, services, and places near you. Fast, reliable, and user-friendly location search to meet all your needs.",
    image: findhere,
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
      "Find-Here App consolidates data from various platforms into a unified dashboard, helping users to easily locate businesses and services near them.",
      "With detailed analytics, content scheduling, and engagement tracking, users can enhance their social media presence effectively.",
      "AI-driven insights and customizable reports allow businesses to make data-driven decisions, improving their overall strategy."
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
    duration: "5 months",
    category: "Web Application"
  },
  // project 4
  {
    id: "learning-management-system",
    slug: "learning-management-system",
    title: "Skill Orbit",
    description: "Skill Orbit: Unlock your potential with personalized learning paths. Enhance your skills and grow professionally with expert-led courses and resources!",
    image: skillorbit,
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
      "Skill Orbit is a robust learning management system designed for educational institutions to effectively deliver online courses.",
      "The platform supports various content types, including video lectures, interactive quizzes, and live streaming sessions to engage learners.",
      "Built with scalability in mind, Skill Orbit ensures reliable performance and accessibility for thousands of students across devices."
    ],
    challenges: [
      "Implementing smooth video streaming",
      "Handling concurrent users during live sessions",
      "Designing an accessible and user-friendly interface",
      "Ensuring data security and compliance with privacy regulations"
    ],
    solutions: [
      "Utilized adaptive bitrate streaming via AWS to ensure smooth video playback",
      "Leveraged WebRTC technology to enable low-latency, real-time video sessions",
      "Adhered to WCAG 2.1 accessibility guidelines to provide a seamless experience for all users",
      "Implemented GDPR and FERPA compliance to ensure user data privacy and security"
    ],
    duration: "6 months",
    category: "Education"
  },
  // project 5 
  {
    id: "IsStartup-app",
    slug: "IsStartup-app",
    title: "Is Startup",
    description: "Is Startup: Discover, track, and connect with innovative startups. Stay updated on trends, funding, and opportunities in the startup ecosystem!",
    image: isStartup,
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
      "Is Startup is a comprehensive fitness tracking app that helps users achieve their health goals with personalized workout plans and nutrition guidance.",
      "Integrated with wearable devices, the app tracks activity levels and provides detailed analytics to monitor progress.",
      "Featuring social tools and gamification, the app ensures users stay motivated and engaged throughout their fitness journey."
    ],
    challenges: [
      "Integrating with various wearable devices",
      "Creating accurate calorie calculation algorithms",
      "Implementing offline functionality",
      "Ensuring data privacy and security"
    ],
    solutions: [
      "Developed a universal device integration layer to support various wearable technologies",
      "Collaborated with nutritionists to create accurate and reliable calorie calculation algorithms",
      "Implemented local data storage with sync capabilities for offline functionality",
      "Used end-to-end encryption to ensure data privacy and security for user information"
    ],
    duration: "4 months",
    category: "Startup Platform"
  },
  // project 6 
  {
    id: "Kids-Items-platform",
    slug: "Kids-item-platform",
    title: "Kidezz",
    description: "Kidezz: A fun, safe platform for kids to learn, play, and grow. Engaging activities, educational games, and interactive content for young minds!",
    image: Kidezz,
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
      "Kidezz is an all-in-one footwear shopping platform that seamlessly connects customers to a vast range of stylish, comfortable shoes.",
      "With advanced features like virtual try-ons, personalized shoe recommendations, and detailed product insights, Kidezz offers an unparalleled shopping experience.",
      "Built with modern web technologies for fast performance, a responsive interface, and a seamless experience across all devices."
    ],
    challenges: [
      "Creating a smooth virtual try-on experience",
      "Handling high-resolution image and video product displays",
      "Integrating payment processing securely",
      "Building a scalable system to manage large product catalogs"
    ],
    solutions: [
      "Implemented augmented reality (AR) for virtual try-ons",
      "Optimized image delivery with a content delivery network (CDN) for faster load times",
      "Integrated Stripe for secure payment processing",
      "Designed a scalable database with Prisma and PostgreSQL to handle extensive product catalogs"
    ],
    duration: "7 months",
    category: "E-Commerce"
  },
  // project 7
  {
    id: "Jewelry-store",
    slug: "Jewelry-store",
    title: "Dhahween",
    description: "Dhahween: An innovative platform connecting talents and opportunities. Discover, learn, and engage with a community that values creativity and innovation!",
    image: dhahween,
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
      "Dhahween is a comprehensive food delivery platform that seamlessly connects restaurants, drivers, and customers in an efficient system.",
      "It features real-time order tracking, smart route optimization, and a streamlined ordering experience for customers.",
      "Built for scalability, Dhahween can manage thousands of orders simultaneously and offers powerful analytics to drive business growth."
    ],
    challenges: [
      "Implementing real-time order tracking",
      "Optimizing delivery routes for efficiency",
      "Managing high traffic during peak hours",
      "Ensuring food quality is maintained during delivery"
    ],
    solutions: [
      "Used WebSocket technology for real-time updates on order status",
      "Integrated Google Maps API for dynamic route optimization",
      "Built auto-scaling infrastructure to handle peak loads",
      "Developed a temperature tracking system to monitor food quality during transit"
    ],
    duration: "5 months",
    category: "Food Delivery"
  },
  // project 8
  {
    id: "Shoe-Store",
    slug: "shoe-store",
    title: "Shoeto",
    description: "Shoeto: Your ultimate shoe shopping destination. Explore a wide range of stylish, comfortable, and trendy footwear for every occasion!",
    image: Shoeto,
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
      "Shoeto is an all-in-one footwear shopping platform that seamlessly connects customers to a vast range of stylish, comfortable shoes.",
      "With advanced features like virtual try-ons, personalized shoe recommendations, and detailed product insights, Shoeto offers an unparalleled shopping experience.",
      "Built with modern web technologies for fast performance, a responsive interface, and a seamless experience across all devices."
    ],
    challenges: [
      "Creating a smooth virtual try-on experience",
      "Handling high-resolution image and video product displays",
      "Integrating payment processing securely",
      "Building a scalable system to manage large product catalogs"
    ],
    solutions: [
      "Implemented augmented reality (AR) for virtual try-ons",
      "Optimized image delivery with a content delivery network (CDN) for faster load times",
      "Integrated Stripe for secure payment processing",
      "Designed a scalable database with Prisma and PostgreSQL to handle extensive product catalogs"
    ],
    duration: "7 months",
    category: "E-Commerce"
  }
];

export default projectsData;