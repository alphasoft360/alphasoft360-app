import icon1 from "../assets/img/1.png";
import icon2 from "../assets/img/2.png";
import icon3 from "../assets/img/3.png";
import icon4 from "../assets/img/4.png";
import icon5 from "../assets/img/5.png";
import icon6 from "../assets/img/6.png";

const servicesData = [
  {
    id: "software-development",
    img: icon1,
    title: "Software Development",
    description:
      "Expert guidance to streamline operations, enhance efficiency, and achieve sustainable business growth through tailored strategies.",
    biography: [
      "Our Software Development service provides comprehensive solutions to build robust, scalable, and efficient software applications tailored to your business needs. We specialize in custom software development using modern technologies and methodologies.",
      "From initial concept to deployment and maintenance, our team ensures high-quality code, seamless integration, and optimal performance. We focus on agile development practices to deliver projects on time and within budget.",
      "Whether it's web applications, mobile apps, or enterprise software, we leverage cutting-edge tools and frameworks to create innovative solutions that drive business success.",
    ],
    skills: [
      { name: "Custom Software Development", percentage: 95 },
      { name: "Agile Methodologies", percentage: 90 },
      { name: "Quality Assurance", percentage: 85 },
      { name: "Project Management", percentage: 88 },
      { name: "Scalable Architecture", percentage: 92 },
      { name: "Modern Frameworks", percentage: 90 },
    ],
  },
  {
    id: "web-development",
    img: icon2,
    title: "Web Development",
    description:
      "Proactive risk identification, assessment, and mitigation to safeguard your business and ensure long-term stability.",
    biography: [
      "Our Web Development service creates dynamic, responsive, and user-friendly websites that enhance your online presence. We build websites that are not only visually appealing but also optimized for performance and SEO.",
      "Using the latest web technologies, we develop custom websites, e-commerce platforms, and web applications that provide exceptional user experiences across all devices.",
      "Our team ensures secure, fast, and maintainable code, with a focus on accessibility and cross-browser compatibility to reach a wider audience.",
    ],
    skills: [
      { name: "Responsive Design", percentage: 95 },
      { name: "SEO Optimization", percentage: 90 },
      { name: "E-commerce Platforms", percentage: 85 },
      { name: "Performance Optimization", percentage: 88 },
      { name: "Security Implementation", percentage: 92 },
      { name: "Cross-Browser Compatibility", percentage: 90 },
    ],
  },
  {
    id: "analytic-solutions",
    img: icon3,
    title: "Analytic Solutions",
    description:
      "In-depth market analysis and insights to inform decision-making and maintain a competitive edge in your industry.",
    biography: [
      "Our Analytic Solutions service helps businesses harness the power of data through advanced analytics, reporting, and visualization tools. We transform raw data into actionable insights that drive informed decision-making.",
      "From data collection and processing to predictive modeling and dashboard creation, we provide end-to-end analytics solutions that uncover trends, patterns, and opportunities.",
      "Our experts use cutting-edge tools and techniques to ensure data accuracy, security, and compliance, helping you gain a competitive advantage in your market.",
    ],
    skills: [
      { name: "Data Analysis", percentage: 95 },
      { name: "Predictive Modeling", percentage: 90 },
      { name: "Data Visualization", percentage: 85 },
      { name: "Business Intelligence", percentage: 88 },
      { name: "Machine Learning", percentage: 80 },
      { name: "Data Security", percentage: 92 },
    ],
  },
  {
    id: "cloud-devops",
    img: icon4,
    title: "Cloud & DevOps",
    description:
      "High-quality service delivery with a focus on excellence, ensuring client satisfaction and building lasting partnerships.",
    biography: [
      "Our Cloud & DevOps service offers comprehensive cloud migration, infrastructure management, and DevOps practices to streamline your development and deployment processes.",
      "We help businesses leverage cloud platforms for scalability, cost-efficiency, and reliability. Our DevOps expertise ensures continuous integration, delivery, and monitoring for faster, more reliable software releases.",
      "From cloud strategy to implementation and ongoing support, we optimize your infrastructure for maximum performance and security.",
    ],
    skills: [
      { name: "Cloud Migration", percentage: 95 },
      { name: "Infrastructure as Code", percentage: 90 },
      { name: "CI/CD Pipelines", percentage: 88 },
      { name: "Containerization", percentage: 85 },
      { name: "Monitoring & Logging", percentage: 90 },
      { name: "Security Best Practices", percentage: 92 },
    ],
  },
  {
    id: "product-design",
    img: icon5,
    title: "Product & Design",
    description:
      "Scalable cloud infrastructure and migration strategies to support digital transformation and growth.",
    biography: [
      "Our Product & Design service focuses on creating intuitive, user-centered designs that enhance product usability and appeal. We combine creativity with functionality to deliver exceptional design solutions.",
      "From user research and wireframing to prototyping and final design, our team ensures that every product meets user needs and business goals.",
      "We specialize in UI/UX design, branding, and product strategy, helping you create products that stand out in the market and delight your users.",
    ],
    skills: [
      { name: "UI/UX Design", percentage: 95 },
      { name: "User Research", percentage: 90 },
      { name: "Prototyping", percentage: 85 },
      { name: "Branding", percentage: 88 },
      { name: "Design Systems", percentage: 80 },
      { name: "Usability Testing", percentage: 90 },
    ],
  },
  {
    id: "data-center",
    img: icon6,
    title: "Data Center",
    description:
      "Dedicated assistance around the clock to resolve issues quickly and maintain smooth operations.",
    biography: [
      "Our Data Center service provides robust, secure, and high-performance data center solutions to support your critical business operations. We offer managed hosting, colocation, and disaster recovery services.",
      "With state-of-the-art facilities and 24/7 monitoring, we ensure maximum uptime, data security, and compliance with industry standards.",
      "Our team of experts handles everything from infrastructure setup to ongoing maintenance, allowing you to focus on your core business while we manage your data center needs.",
    ],
    skills: [
      { name: "Managed Hosting", percentage: 95 },
      { name: "Colocation Services", percentage: 90 },
      { name: "Disaster Recovery", percentage: 88 },
      { name: "24/7 Monitoring", percentage: 92 },
      { name: "Data Security", percentage: 95 },
      { name: "Compliance Management", percentage: 90 },
    ],
  },
];

export default servicesData;
