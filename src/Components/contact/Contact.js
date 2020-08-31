import React, { Fragment } from 'react';
import './contact.css';

export const Contact = () => {
  return (
    <Fragment>
      <div className="Contact">
        <h1 className="page-title">Contact Me</h1>
        <div className="contact__content">
          <h2 className="section-heading">Please fill in your information</h2>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate" />
                <label for="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="text" className="validate" />
                <label for="icon_telephone">Telephone</label>
              </div>
            </div>
            <p className="my-1">
              <label>
                <input name="group1" type="radio" checked />
                <span className="flow-text">
                  Business Development Opportunity
                </span>
              </label>
            </p>
            <p className="my-1">
              <label>
                <input name="group1" type="radio" />
                <span className="flow-text">Web Development Opportunity</span>
              </label>
            </p>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                ></textarea>
                <label
                  for="textarea1"
                  className="prefix"
                  style={{ fontSize: '1rem' }}
                >
                  Project or Job Opportunity
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
