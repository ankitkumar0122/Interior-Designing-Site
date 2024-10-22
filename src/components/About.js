import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaPalette } from 'react-icons/fa';
import '../css/About.css'
const About = () => {
  return (
    <div className="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About Us</h1>
        <p>
          We are a premium interior design company dedicated to transforming spaces with creativity, elegance, and functionality. With years of experience in the industry, our team of passionate designers takes pride in delivering unique designs tailored to our clients' needs.
        </p>
      </motion.div>

      <div className="about-details">
        <motion.div
          className="about-card"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaAward size={50} />
          <h3>10+ Years of Experience</h3>
          <p>We have over a decade of experience in delivering exceptional interior design projects for homes and offices.</p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaUsers size={50} />
          <h3>Expert Team</h3>
          <p>Our team is made up of highly skilled and creative designers who bring your vision to life.</p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaPalette size={50} />
          <h3>Creative Design</h3>
          <p>We focus on creating unique, modern, and functional designs that inspire and impress.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
 