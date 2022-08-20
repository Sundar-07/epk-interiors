import React, { useRef } from "react";
import EPKcard from "../../assets/epk_card.jpg";
import emailJS from "@emailjs/browser";

function ContactUs() {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailJS
      .sendForm(
        "service_x6pd8v1",
        "template_pxfg7dh",
        contactForm.current,
        "cKAOXrdXi1vKKN9F-"
      )
      .then((result) => {
        console.log(result);
        window.alert("Your message has been successfully sent to EPK Group.!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        window.alert("Something went wrong in form: ", error.text);
      });
  };

  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <h1 className="title is-1">Contact Us</h1>
                {/* <p className="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
							voluptate facere molestiae consequatur.</p> */}
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={EPKcard} alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
                {/* <div className="social-media">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="button is-light is-large"
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="button is-light is-large"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="button is-light is-large"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div> */}
              </div>
              {/* Contact Form */}

              <div className="column is-one-third has-text-left">
                <form ref={contactForm} onSubmit={sendEmail}>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="customer_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Phone number</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="number"
                        name="customer_mobile"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="customer_email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message: (in 100 words)</label>
                    <div className="control">
                      <textarea
                        rows="5"
                        cols="40"
                        maxLength="100"
                        name="customer_message"
                        className="textarea is-medium"
                        placeholder="Enter your message (100 words)"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-link is-fullwidth has-text-weight-medium is-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
