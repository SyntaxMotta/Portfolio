import React, { Fragment } from 'react';
import anime from '../../images/AnimeSiteImg.PNG';
import logger from '../../images/LoggerImg.PNG';
import netflix from '../../images/NetflixImg.PNG';
import './project.css';

export const Projects = () => {
  return (
    <Fragment>
      <div className="Projects">
        <h1 className="page-title">Projects</h1>
        <div className="project__content center-align">
          <div className="project__block" style={{ gridArea: 'img1' }}>
            <img src={anime} alt="Anime Site" className="project__img" />
            <a href="google.com" className="section-heading">
              Anime Site
            </a>
            <div className="bottom-line"></div>
            <a href="https://github.com/SyntaxMotta/AnimeSearch.git">
              Repo <i class="fab fa-github"></i>
            </a>
            <p className="flow-text">
              React application reaching out to the Jikan anime API and
              displaying the data
            </p>
          </div>
          <div className="project__block " style={{ gridArea: 'img2' }}>
            <img src={logger} alt="IT Logger" className="project__img" />
            <a href="google.com" className="section-heading">
              IT Logger
            </a>
            <div className="bottom-line"></div>
            <a href="https://github.com/SyntaxMotta/IT-Logger-Final.git">
              Repo <i class="fab fa-github"></i>
            </a>
            <p className="flow-text">
              Full MERN Stack Logger application for IT departments to document
              tasks
            </p>
          </div>
          <div className="project__block" style={{ gridArea: 'img3' }}>
            <img src={netflix} alt="Netflix Clone " className="project__img" />
            <a href="google.com" className="section-heading">
              Netflix UI Clone
            </a>
            <div className="bottom-line"></div>
            <a href="https://github.com/SyntaxMotta/NetflixClone.git">
              Repo <i class="fab fa-github"></i>
            </a>
            <p className="flow-text">Netflix UI Clone Application</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
