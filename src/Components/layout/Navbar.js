import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import profile from '../../images/headshot.jfif';

export const Navbar = () => {
  return (
    <Fragment>
      <img src={profile} alt="Icon" className="responsive-img navbar__icon" />
      <p className="flow-text navbar__title" style={{ margin: '1.3rem auto' }}>
        Michaelangelo
      </p>
      <div className="navbar__iconBlock">
        <a
          href="https://www.linkedin.com/in/michaelangelo-motta/"
          className="navbar__link"
        >
          <i class="fab fa-linkedin fa-2x"></i>
          <span className="flow-text">LinkedIn</span>
        </a>

        <a href="tel:3015201800" className="navbar__link">
          <i class="fas fa-phone-square fa-2x"></i>
          <span className="flow-text">Phone</span>
        </a>

        <a href="mailto: michaelangelomotta@gmail.com" className="navbar__link">
          <i class="fas fa-envelope fa-2x"></i>
          <span className="flow-text">Email</span>
        </a>
      </div>

      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="waves-effect waves-light hoverable">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className=" waves-effect waves-light  hoverable">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className=" waves-effect waves-light  hoverable"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className=" waves-effect waves-light  hoverable"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
