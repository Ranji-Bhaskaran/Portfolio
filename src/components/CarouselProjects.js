import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselProjects.css";

import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/bg1.jpg";

function CarouselProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Display 2 slides at a time
    slidesToScroll: 2, // Scroll 2 slides at a time
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }, // Fall back to 1 slide on small screens
      },
    ],
  };

  const projects = [
    {
      img: projImg1,
      title: "Real Estate Management",
      link: "https://github.com/Ranji-Bhaskaran/RealEstateManagement",
    },
    {
      img: projImg2,
      title: "Pet Care Analysis",
      link: "https://github.com/Ranji-Bhaskaran/PetcareAnalysis",
    },
    {
      img: projImg3,
      title: "Blockchain",
      link: "https://www.youtube.com/watch?v=wN9bOQYxWyc&feature=youtu.be",
    },
    {
      img: projImg4,
      title: "Weather App",
      link: "https://github.com/Ranji-Bhaskaran?tab=repositories",
    },
    {
      img: projImg5,
      title: "Finance & Expense Analysis",
      link: "https://github.com/Ranji-Bhaskaran/FinanceAPI",
    },
  ];

  return (
    <section className="projects-carousel" style={{ backgroundImage: `url(${colorSharp2})` }}>
      <div className="container">
        <h2>Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CarouselProjects;