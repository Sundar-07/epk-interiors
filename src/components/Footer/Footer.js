import React from "react";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <footer className="footer has-background-light">
        <div className="content has-text-centered">
          <p>
            &#169; <span>{getCurrentYear()}</span> All Rights Reserved by{" "}
            <strong>EPK Group</strong>
          </p>
          <div className="social-media">
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
            <a
              href="https://linkedin.com"
              target="_blank"
              className="button is-light is-large"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
