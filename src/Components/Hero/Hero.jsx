import React from 'react';
import './Hero.css';
import profileImg1 from '../../assets/profile_img1.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImg1} alt="Rohit Shrivastava" className='hero-img' />
      <h1>
        <span>I'm Rohit Shrivastava, </span>frontend developer.
      </h1>
      <p>
        I am a frontend developer. I can provide clean code and pixel-perfect design. 
        I also make websites more interactive with web animations.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
