import React from "react";
import { Link, useNavigate } from "react-router-dom";
import EPKlogo from "../../assets/epk_logo.png";


function Header() {
  let navigate = useNavigate();
  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <nav
        className="navbar has-shadow is-white"
        role="navigation"
        aria-label="main navigation dropdown"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={EPKlogo} width="120" height="28" />
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => navigate("/")}>
              Home
            </a>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className="navbar-link">Services</a>

              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  onClick={() => navigate("/interior-works")}
                >
                  Interior Works
                </a>
                <a
                  className="navbar-item"
                  onClick={() => navigate("/office-products")}
                >
                  Office Products
                </a>
                {/* <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a> */}
              </div>
            </div>

            <a className="navbar-item" onClick={() => navigate("/teams")}>
              Teams
            </a>
            <a className="navbar-item" onClick={() => navigate("/about-us")}>
              About Us
            </a>
          </div>
          {/* Contact us */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-primary"
                  onClick={() => navigate("/contact-us")}
                >
                  <strong>Contact Us</strong>
                </a>
                {/* <a className="button is-light">Log in</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
