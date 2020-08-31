import React from 'react';
import './about.css';
import code from '../../images/code.jpg';
import sales from '../../images/sales.jpg';

export const About = () => {
  return (
    <div className="About">
      <h1 className="page-title">About</h1>

      <div className="about__content">
        <div className="about__positions">
          <div className="about__block">
            <div>
              <h1 className="section-heading">Business Development</h1>
              <div className="bottom-line"></div>
              <p className="flow-text">
                I have 2 years of business development experience with various
                high tech companies with different capabilities. I primarily
                worked for a website accessibility company called User1st where
                I learned about A11y guidelines and best practices.
              </p>
            </div>
            <img src={sales} alt="Sales gong" className="about__image" />
          </div>

          <div className="about__block">
            <img
              src={code}
              alt="Sitting at computer"
              className="about__image"
            />
            <div>
              <h1 className="section-heading">Front End Development</h1>
              <div className="bottom-line"></div>
              <p className="flow-text">
                I am a self taught front end web developer learning new things
                every day. I have used various resources including Udemy,
                FreeCodeCamp, and mentors to learn the trade.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="about__techSkills">
          <h1 className="section-heading">Technical Skills</h1>
          <div className="bottom-line"></div>
          <h3>HTML&CSS</h3>
          <div className="progress">
            <div style={{ width: '80%' }}></div>
          </div>
          <h3>Javascript</h3>
          <div className="progress">
            <div style={{ width: '58%' }}></div>
          </div>
          <h3>ReactJS</h3>
          <div className="progress">
            <div style={{ width: '50%' }}></div>
          </div>
          <h3>Node js</h3>
          <div className="progress">
            <div style={{ width: '15%' }}></div>
          </div>
          <h3>Salesforce</h3>
          <div className="progress">
            <div style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
