import React, { Component } from 'react'
import env from '../../env'
import './contact.style.css'

export default class Contact extends Component {
  render () {
    return (
      <section id="contact" className="container pb-5">
        <div className="row">
          <div className="col-12 text-center mt-3 mb-3">
            <h2>Contact Me</h2>
          </div>
          <div className="col-12">
            <form action={`https://formspree.io/${env.EMAIL}`} method="POST" className="row">
              <div className="col-12 col-md-6 form-group">
                <label htmlFor="contact-email">Full Name</label>
                <input type="text" className="form-control" name="name" id="contact-email" aria-describedby="nameHelp" placeHolder="Full Name" required/>
              </div>
              <div className="col-12 col-md-6 form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input type="email" className="form-control" name="_replyto" id="contact-email" aria-describedby="nameHelp" placeHolder="Email Address" required/>
              </div>
              <div className="col-12 form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea type="text" className="form-control" name="message" id="contact-message" aria-describedby="messageHelp" placeHolder="Message" required/>
              </div>
              <div className="col-12 form-group text-right">
                <button type="submit" className="btn btn-green">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
