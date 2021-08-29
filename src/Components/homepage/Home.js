import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <Fragment>
      <div className="Home">
        <div className=" center-align">
          <h1 className="section-heading">My name is Michaelangelo Motta</h1>
          <div className="divider"></div>
          <h2 className="section-heading" style={{ margin: '1rem' }}>
            Front End React Developer and a proven Business Development
            Representative
          </h2>
          <h2>
            <Link
              to="/contact"
              className=" btn-large waves-effect waves-light hoverable home__workBtn"
            >
              Lets get to work
            </Link>
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
