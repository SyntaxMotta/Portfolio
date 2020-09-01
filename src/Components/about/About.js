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

        <div className="about__resume">
          <h1 className="section-heading">Resume</h1>
          <div className="bottom-line"></div>
          <div className="about__resumeBlock">
            <h2 className="section-heading">
              Motta&Motta Real Estate, Glen Burnie, MD
            </h2>

            <p className="sub-heading">Property Manager/Showing Agent</p>
            <p>(2016 - Present)</p>
            <ul>
              <li>
                Building and retaining a strong client base with Buildium CRM
              </li>
              <li>
                Collaberating with contractors and landlords to keep properties
                up to standards
              </li>
              <li>
                Meet prospective renters at properties and give walkthroughs and
                showcase details on the homes
              </li>
              <li>Organize and file corresponding paperwork</li>
            </ul>
          </div>
          <div className="about__resumeBlock">
            <h2 className="section-heading">
              MemoryBlue/User1st, Tysons Virginia
            </h2>

            <p className="sub-heading">Business Development Representative</p>
            <p>(March 2019 - May 2020)</p>
            <ul>
              <li>Prospect for high quality leads using Salesforce CRM</li>
              <li>Create high revenue generating opportunities</li>
              <li>Fill sales pipeline</li>
              <li>Training and mentorship</li>
            </ul>
          </div>

          <div className="about__resumeBlock">
            <h2 className="section-heading">
              Verizon Cellular Sales, Baltimore, MD
            </h2>

            <p className="sub-heading">Sales Representative</p>
            <p>(2018 - 2019)</p>
            <ul>
              <li>
                Selling products and services using solid arguments to customers
              </li>
              <li>Meeting and exceeding sales quotas</li>
              <li>Maintaining positive relationships with B2B clients</li>
              <li>
                Performing cost-benefit analyses of existing and potential
                customers
              </li>
            </ul>
          </div>
          <div className="about__resumeBlock">
            <h2 className="section-heading">Education</h2>
            <p>Howard Community College AA Business & Technology</p>
            <p>
              Reservoir High School(Fulton MD), High School Diploma Received
            </p>
            <h2 className="section-heading">Volunteer Experience</h2>
            <p>
              Maryland Food Bank, Packaging food and supplies for people in need
              (2014 - Present)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
