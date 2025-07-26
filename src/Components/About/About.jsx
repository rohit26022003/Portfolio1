import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profileImg1 from '../../assets/profile_img1.jpg';

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg1} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am a frontend developer. I can provide clean code and pixel-perfect design. I also make websites more interactive with web animations.</p>
            <p>My main focus is to make the web look attractive, user-friendly and functional.</p>
          </div>

          {/* Updated skill blocks with correct class */}
          <div className="about-skill">
            <p>React</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>MYSQL</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>JAVA</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>PYTHON</p>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
