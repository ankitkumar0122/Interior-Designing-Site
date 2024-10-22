import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true, 
  };

  return (
    <div className="home">
      <Slider {...settings}>
        <div><img src="/imgs/home1.webp" alt="Slide 1" /></div>
        <div><img src="/imgs/home2.webp" alt="Slide 2" /></div>
        <div><img src="/imgs/home3.jpg" alt="Slide 3" /></div>
      </Slider>
      <div className="welcome-text">
        <h1>Welcome to Your Dream Interior</h1>
        <p>Transforming spaces with elegance and style</p>
      </div>
    </div>
  );
};

export default Home;
