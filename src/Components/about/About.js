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
                I have 3 years of business development experience with various
                high tech companies with different capabilities. Through targeted prospecting and persistent outreach, I have filled pipelines with revenue generating opportunities.
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
                Even before working in tech sales I learned about web
                development fundamentals in college. building a network of Front
                End/UI developers for a web accessibility client piqued my interest in turning my
                hobby into a career.
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
              OneClickPolitics, Washington, DC
            </h2>

            <p className="sub-heading">Business Development Representative</p>
            <p>(October 2020 - Present)</p>
            <ul>
            <li>Generate leads via outbound campaigns</li>
              <li>Build successful pipeline for account executive using effective prospecting, cold-calling, email outreach and social media outreach</li>
              <li>Train and mentor new business development representatives</li>
              <li>Build and run custom email campaigns and cold-calling scripts to ensure success</li>
              <li>Chosen by the CEO to attend and represent the company at conferences and networking
events</li>
              <li>Build out prospecting lists within assigned territory</li>
            </ul>
          </div>
          <div className="about__resumeBlock">
            <h2 className="section-heading">
              Motta&Motta Real Estate, Glen Burnie, MD
            </h2>

            <p className="sub-heading">Property Manager/Showing Agent</p>
            <p>(2016 - Present)</p>
            <ul>
              <li>
                Build and retained a strong client base within Buildium CRM
              </li>
              <li>
                Collaberating with contractors and landlords to keep properties
                up to standards
              </li>
              <li>
                Meet prospective renters at properties and give walkthroughs and provide information on properties
              </li>
            </ul>
          </div>
          <div className="about__resumeBlock">
            <h2 className="section-heading">
              MemoryBlue/User1st, Tysons VA
            </h2>

            <p className="sub-heading">Business Development Representative</p>
            <p>(March 2019 - May 2020)</p>
            <ul>
              <li>Generate leads via outbound campaigns</li>
              <li>Work with a variety of tech companies to create revenue generating opportunities</li>
              <li>Built a successful pipeline for account executive by using effective prospecting, cold calling, email outreach and social media outreach</li>
              <li>Trained and mentored new business development representatives</li>
            </ul>
          </div>

          <div className="about__resumeBlock">
            <h2 className="section-heading">
              Verizon Cellular Sales, Baltimore, MD
            </h2>

            <p className="sub-heading">Sales Representative</p>
            <p>(2018 - 2019)</p>
            <ul style={{ listStyleType: 'circle' }}>
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
