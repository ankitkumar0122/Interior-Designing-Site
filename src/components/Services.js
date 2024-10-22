import React from 'react';
import Slider from "react-slick";
import { FaCouch, FaPaintBrush, FaBuilding } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Services.css'; 

const Services = () => {
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
    <div className="services">
      <h2>Our Services</h2>
      <Slider {...settings}>
        <div className="service-item">
          <FaCouch size={50} />
          <h3>Interior Design</h3>
          <p>We provide comprehensive interior design services tailored to your unique style and preferences.</p>
        </div>
        <div className="service-item">
          <FaPaintBrush size={50} />
          <h3>Custom Furniture</h3>
          <p>Our custom furniture solutions are designed to enhance the functionality and aesthetics of your space.</p>
        </div>
        <div className="service-item">
          <FaBuilding size={50} />
          <h3>Space Planning</h3>
          <p>We specialize in efficient space planning to maximize the use of your area while maintaining comfort and style.</p>
        </div>
      </Slider>
    </div>
  );
};

export default Services;
