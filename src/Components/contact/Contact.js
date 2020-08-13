import React, { Fragment } from 'react';
import './contact.css';

export const Contact = () => {
  return (
    <div className="card-panel">
      <div className="page-title">Contact Me</div>
      <div class="contact__content">
        <h2 className="section-heading">
          Please fill in your information. I will respond promptly
        </h2>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="name" type="text" class="validate" />
              <label for="name">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input id="icon_telephone" type="text" class="validate" />
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
          <p class="my-1">
            <label>
              <input name="group1" type="radio" checked />
              <span className="flow-text">
                Business Development Opportunity
              </span>
            </label>
          </p>
          <p class="my-1">
            <label>
              <input name="group1" type="radio" />
              <span className="flow-text">Web Development Opportunity</span>
            </label>
          </p>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Project or Job Opportunity</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
