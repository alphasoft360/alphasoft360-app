import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Icons
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiBootstrap,
  DiNodejs,
  DiPhp,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiGithub,
  SiWordpress,
  SiLaravel,
  SiSymfony,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
} from "react-icons/si";

const partners = [
  { id: 1, Icon: DiHtml5, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", hoverColor: "#E34F26" },
  { id: 2, Icon: DiCss3, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", hoverColor: "#1572B6" },
  { id: 3, Icon: DiJsBadge, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", hoverColor: "#F7DF1E" },
  { id: 4, Icon: DiReact, name: "React", link: "https://react.dev/", hoverColor: "#61DAFB" },
  { id: 5, Icon: DiBootstrap, name: "Bootstrap", link: "https://getbootstrap.com/", hoverColor: "#7952B3" },
  { id: 6, Icon: SiTailwindcss, name: "TailwindCSS", link: "https://tailwindcss.com/", hoverColor: "#06B6D4" },
  { id: 7, Icon: DiNodejs, name: "Node.js", link: "https://nodejs.org/", hoverColor: "#339933" },
  { id: 8, Icon: SiGithub, name: "GitHub", link: "https://github.com/", hoverColor: "#181717" },
  { id: 9, Icon: SiWordpress, name: "WordPress", link: "https://wordpress.org/", hoverColor: "#21759B" },
  { id: 10, Icon: DiPhp, name: "PHP", link: "https://www.php.net/", hoverColor: "#777BB4" },
  { id: 11, Icon: SiLaravel, name: "Laravel", link: "https://laravel.com/", hoverColor: "#FF2D20" },
  { id: 12, Icon: SiSymfony, name: "Symfony", link: "https://symfony.com/", hoverColor: "#000000" },
  { id: 13, Icon: SiNextdotjs, name: "Next.js", link: "https://nextjs.org/", hoverColor: "#000000" },
  { id: 14, Icon: SiAngular, name: "Angular", link: "https://angular.io/", hoverColor: "#DD0031" },
  { id: 15, Icon: SiVuedotjs, name: "Vue.js", link: "https://vuejs.org/", hoverColor: "#4FC08D" },

];

const PartnerSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  // Use media queries to control slides (instead of static breakpoints)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) setSlidesToShow(1);
      else if (window.innerWidth <= 768) setSlidesToShow(2);
      else if (window.innerWidth <= 992) setSlidesToShow(3);
      else setSlidesToShow(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // continuous scroll
    speed: 4000, // controls marquee speed
    cssEase: "linear", // smooth motion
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
          {[...partners, ...partners].map(({ id, Icon, name, link, hoverColor }, index) => (
            <div key={index} className="px-3">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="partner-icon d-flex flex-column align-items-center justify-content-center text-decoration-none"
              >
                <Icon
                  size={70}
                  className="tech-icon"
                  style={{ color: "#ffffffcc", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffffcc")}
                />
                <p className="text-light mt-3 mb-0 small fw-semibold">{name}</p>
              </a>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default PartnerSlider;
