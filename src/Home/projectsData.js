// Import project images
import auracart from '../assets/img/projects/AuraCart.png';
import pop from '../assets/img/projects/POP.png';
import findhere from '../assets/img/projects/findhere.png';
import isStartup from '../assets/img/projects/isStartup.png';
import paint from '../assets/img/projects/paint.png';
import skillorbit from '../assets/img/projects/skillorbit.png';
import thobban from '../assets/img/projects/ذهويّن.png';
import shoeto from "../assets/img/projects/Shoeto.png";

const projectsData = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Aura Cart Store",
    description: "A full-featured online shopping platform with payment integration and inventory management.",
    img: auracart,
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
    id: "mobile-app",
    slug: "mobile-app",
    title: "POP - Point of Purchase",
    description: "A mobile application for managing point of purchase operations and inventory.",
    img: pop,
    techStack: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
    features: [
      "Barcode/QR code scanning",
      "Real-time inventory updates",
      "Offline functionality",
      "Sales reporting and analytics",
      "User role management"
    ],
    overview: [
      "POP revolutionizes retail operations by providing a comprehensive mobile solution for point of purchase management.",
      "The app enables businesses to process transactions, manage inventory, and generate reports from any mobile device.",
      "With offline capabilities, businesses can continue operations even without internet connectivity, with automatic sync when back online."
    ],
    completionDate: "2024-02-20",
    client: "Retail Solutions Inc.",
    duration: "5 months"
  },
  {
    id: "find-here",
    slug: "find-here",
    title: "FindHere",
    description: "A location-based service for finding nearby points of interest and businesses.",
    img: findhere,
    techStack: ["React", "Google Maps API", "Node.js", "MongoDB", "Express"],
    features: [
      "Real-time location tracking",
      "Business search and filtering",
      "User reviews and ratings",
      "Route planning",
      "Offline maps"
    ],
    overview: [
      "FindHere helps users discover and navigate to nearby businesses and points of interest with ease.",
      "The platform provides detailed business information, user reviews, and real-time directions.",
      "Business owners can manage their listings and engage with customers through the integrated review system."
    ],
    completionDate: "2024-01-10",
    client: "Urban Explorer Ltd.",
    duration: "6 months"
  },
  {
    id: "startup-platform",
    slug: "startup-platform",
    title: "iStartup",
    description: "A platform connecting startups with investors and mentors.",
    img: isStartup,
    techStack: ["Vue.js", "Django", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Startup profiles and pitching",
      "Investor matching",
      "Mentorship programs",
      "Funding rounds management",
      "Analytics dashboard"
    ],
    overview: [
      "iStartup bridges the gap between innovative startups and potential investors in a streamlined platform.",
      "The platform facilitates connections, funding opportunities, and mentorship programs to help startups grow.",
      "With advanced matching algorithms, startups can find the right investors and mentors based on their industry and needs."
    ],
    completionDate: "2023-12-05",
    client: "Venture Connect",
    duration: "7 months"
  },
  {
    id: "digital-art-platform",
    slug: "digital-art-platform",
    title: "Digital Canvas",
    description: "An online platform for digital artists to create, share, and sell their artwork.",
    img: paint,
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "WebSockets"],
    features: [
      "Digital art creation tools",
      "Marketplace for artwork",
      "Live collaboration",
      "NFT integration",
      "Artist portfolios"
    ],
    overview: [
      "Digital Canvas provides artists with powerful tools to create and monetize their digital artwork.",
      "The platform supports various digital art formats and offers features like layers, brushes, and effects.",
      "Artists can sell their work directly to collectors or create limited edition NFTs with blockchain verification."
    ],
    completionDate: "2023-11-15",
    client: "ArtTech Innovations",
    duration: "8 months"
  },
  {
    id: "learning-platform",
    slug: "learning-platform",
    title: "SkillOrbit",
    description: "An online learning platform with courses on various professional skills.",
    img: skillorbit,
    techStack: ["Angular", "NestJS", "PostgreSQL", "AWS S3", "Docker"],
    features: [
      "Interactive course content",
      "Progress tracking",
      "Certification upon completion",
      "Instructor dashboards",
      "Discussion forums"
    ],
    overview: [
      "SkillOrbit offers high-quality online courses designed to help professionals upskill and advance their careers.",
      "The platform features interactive content, hands-on projects, and personalized learning paths.",
      "Instructors can create and manage their courses with comprehensive analytics on student engagement and performance."
    ],
    completionDate: "2023-10-20",
    client: "EduTech Solutions",
    duration: "9 months"
  },
  {
    id: "arabic-platform",
    slug: "arabic-platform",
    title: "Thobban",
    description: "A platform for Arabic language learning and cultural exchange.",
    img: thobban,
    techStack: ["React Native", "Node.js", "MongoDB", "Google Cloud", "Docker"],
    features: [
      "Interactive Arabic lessons",
      "Speech recognition",
      "Cultural insights",
      "Progress tracking",
      "Community features"
    ],
    overview: [
      "Thobban makes learning Arabic engaging and effective through immersive lessons and cultural context.",
      "The platform uses speech recognition to help learners perfect their pronunciation and conversational skills.",
      "With a focus on real-world usage, students learn both Modern Standard Arabic and regional dialects."
    ],
    completionDate: "2023-09-25",
    client: "Language Bridge",
    duration: "10 months"
  },
  {
    id: "ecommerce-shoes",
    slug: "ecommerce-shoes",
    title: "Shoeto",
    description: "An e-commerce platform specializing in premium and limited-edition footwear.",
    img: shoeto,
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    features: [
      "Product customization",
      "Augmented reality try-on",
      "Size recommendation engine",
      "Secure checkout",
      "Order tracking"
    ],
    overview: [
      "Shoeto offers a premium shopping experience for footwear enthusiasts, featuring the latest styles and exclusive releases.",
      "The platform includes innovative features like AR try-on and a size recommendation system to reduce returns.",
      "With a focus on mobile-first design, customers can browse and shop seamlessly across all devices."
    ],
    completionDate: "2023-08-30",
    client: "Urban Steps",
    duration: "6 months"
  }
];

export default projectsData;
