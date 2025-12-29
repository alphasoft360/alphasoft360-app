import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dev Icons
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiBootstrap,
  DiNodejs,
  DiPhp,
} from "react-icons/di";

// Simple Icons
import {
  SiTailwindcss,
  SiGithub,
  SiWordpress,
  SiLaravel,
  SiSymfony,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiDocker,
  SiMongodb,
  SiExpress,
  SiShopify,
  SiPostman,
  SiSwagger,
  SiJsonwebtokens,
  SiGraphql,
  SiApachekafka,
  SiRedis,
  SiFirebase,
  SiGooglecloud,
  SiAmazonwebservices,
} from "react-icons/si";

const partners = [
  { id: 1, Icon: DiHtml5, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", hoverColor: "#E34F26" },
  { id: 2, Icon: DiCss3, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", hoverColor: "#1572B6" },
  { id: 3, Icon: DiJsBadge, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", hoverColor: "#F7DF1E" },
  { id: 4, Icon: DiReact, name: "React", link: "https://react.dev/", hoverColor: "#61DAFB" },
  { id: 5, Icon: DiBootstrap, name: "Bootstrap", link: "https://getbootstrap.com/", hoverColor: "#7952B3" },
  { id: 6, Icon: SiTailwindcss, name: "TailwindCSS", link: "https://tailwindcss.com/", hoverColor: "#06B6D4" },
  { id: 7, Icon: DiNodejs, name: "Node.js", link: "https://nodejs.org/", hoverColor: "#339933" },
  { id: 8, Icon: SiExpress, name: "Express.js", link: "https://expressjs.com/", hoverColor: "#000000" },
  { id: 9, Icon: SiMongodb, name: "MongoDB", link: "https://www.mongodb.com/", hoverColor: "#47A248" },
  { id: 10, Icon: SiGithub, name: "GitHub", link: "https://github.com/", hoverColor: "#181717" },
  { id: 11, Icon: SiWordpress, name: "WordPress", link: "https://wordpress.org/", hoverColor: "#21759B" },
  { id: 12, Icon: SiShopify, name: "Shopify", link: "https://www.shopify.com/", hoverColor: "#96BF48" },
  { id: 13, Icon: DiPhp, name: "PHP", link: "https://www.php.net/", hoverColor: "#777BB4" },
  { id: 14, Icon: SiLaravel, name: "Laravel", link: "https://laravel.com/", hoverColor: "#FF2D20" },
  { id: 15, Icon: SiSymfony, name: "Symfony", link: "https://symfony.com/", hoverColor: "#000000" },
  { id: 16, Icon: SiNextdotjs, name: "Next.js", link: "https://nextjs.org/", hoverColor: "#000000" },
  { id: 17, Icon: SiAngular, name: "Angular", link: "https://angular.io/", hoverColor: "#DD0031" },
  { id: 18, Icon: SiVuedotjs, name: "Vue.js", link: "https://vuejs.org/", hoverColor: "#4FC08D" },
  { id: 19, Icon: SiDocker, name: "Docker", link: "https://www.docker.com/", hoverColor: "#2496ED" },
  { id: 20, Icon: SiPostman, name: "Postman", link: "https://www.postman.com/", hoverColor: "#FF6C37" },
  { id: 21, Icon: SiSwagger, name: "Swagger", link: "https://swagger.io/", hoverColor: "#85EA2D" },
  { id: 22, Icon: SiJsonwebtokens, name: "JWT", link: "https://jwt.io/", hoverColor: "#000000" },
  { id: 23, Icon: SiGraphql, name: "GraphQL", link: "https://graphql.org/", hoverColor: "#E10098" },
  { id: 24, Icon: SiApachekafka, name: "Apache Kafka", link: "https://kafka.apache.org/", hoverColor: "#231F20" },
  { id: 25, Icon: SiRedis, name: "Redis", link: "https://redis.io/", hoverColor: "#DC382D" },
  { id: 26, Icon: SiFirebase, name: "Firebase", link: "https://firebase.google.com/", hoverColor: "#FFCA28" },
  { id: 27, Icon: SiGooglecloud, name: "Google Cloud", link: "https://cloud.google.com/", hoverColor: "#4285F4" },
  { id: 28, Icon: SiAmazonwebservices, name: "AWS", link: "https://aws.amazon.com/", hoverColor: "#FF9900" },
];

const PartnerSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth <= 576) setSlidesToShow(1);
      else if (window.innerWidth <= 768) setSlidesToShow(2);
      else if (window.innerWidth <= 992) setSlidesToShow(3);
      else setSlidesToShow(5);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <section className="partner-section py-5">
      <div className="container text-center">
        <span className="text-primary fw-semibold d-block mb-2">
          OUR TECHNOLOGIES
        </span>
        <h2 className="fw-bold text-white mb-5">
          Trusted by Modern Frameworks
        </h2>

        <Slider {...settings}>
          {[...partners, ...partners].map(
            ({ Icon, name, link, hoverColor }, index) => (
              <div key={index} className="px-3">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex flex-column align-items-center text-decoration-none"
                >
                  <Icon
                    size={70}
                    className="tech-icon"
                    style={{ color: "#ffffffcc" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = hoverColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#ffffffcc")
                    }
                  />
                  <p className="text-light mt-3 mb-0 small fw-semibold">
                    {name}
                  </p>
                </a>
              </div>
            )
          )}
        </Slider>
      </div>
 <style jsx="true">{`
        .partner-section {
          background: linear-gradient(180deg, #061b6b 0%, #000a33 100%);
          overflow: hidden;
        }

        .tech-icon {
          opacity: 0.9;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .tech-icon:hover {
          transform: scale(1.15);
          opacity: 1;
        }

        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }

        .slick-track {
          display: flex !important;
          align-items: center;
        }

        @media (max-width: 992px) {
          .partner-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .partner-section h2 {
            font-size: 1.6rem;
          }
          .tech-icon {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 576px) {
          .partner-section h2 {
            font-size: 1.4rem;
          }
          .tech-icon {
            width: 55px;
            height: 55px;
          }
        }
      `}</style>    </section>
  );
};

export default PartnerSlider;
