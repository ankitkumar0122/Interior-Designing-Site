import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Projects.css'; 

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="projects">
      <h2>Our Projects</h2>
      <Slider {...settings}>
        <div className="gallery-item"><img src="/imgs/p1.jpg" alt="Project 1" /></div>
        <div className="gallery-item"><img src="/imgs/p2.avif" alt="Project 2" /></div>
        <div className="gallery-item"><img src="/imgs/p3.png" alt="Project 3" /></div>
       
      </Slider>
    </div>
  );
};

export default Projects;
