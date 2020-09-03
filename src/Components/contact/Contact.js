import React, { Fragment } from 'react';
import './contact.css';

export const Contact = () => {
  return (
    <Fragment>
      <div className="Contact">
        <h1 className="page-title">Contact Me</h1>
        <div className="contact__content">
          <h2 className="section-heading">Please fill in your information</h2>
          <form method="post" name="contact" className="col s12">
            <input type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" name="name" className="validate" />
                <label for="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="validate"
                />
                <label for="email">Email</label>
              </div>
              <div className="input-field col s12 m6">
                <i className="material-icons prefix">phone</i>
                <input
                  id="icon_telephone"
                  type="text"
                  name="phone"
                  className="validate"
                />
                <label for="icon_telephone">Telephone</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  className="contact__textarea"
                  placeholder="Project or Job Opportunity"
                  name="message"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className=" waves-effect waves-light  hoverable contact__submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
