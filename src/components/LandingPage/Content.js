import React from "react";
import DesignLogo from "../../assets/landing page/designs.png";
import SupportLogo from "../../assets/landing page/support.png";
import MarketLogo from "../../assets/landing page/market.png";
import DeliveryLogo from "../../assets/landing page/delivery.png";
import CarouselPage from "./CarouselPage";
const Content = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={SupportLogo} alt="some image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="is-size-4 has-text-centered">
                  Customer Support
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={DesignLogo} alt="some image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="is-size-4 has-text-centered">Live Designs</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={MarketLogo} alt="some image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="is-size-4 has-text-centered">
                  Best-in-Market Warranties
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={DeliveryLogo} alt="some image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="is-size-4 has-text-centered">
                  Delivery Across India
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <h3 className="title">Best selling designs</h3>
      <CarouselPage />
      {/* Next Content */}
      <section className="section">
        <section className="container has-text-centered">
          <h2 className="title">Why EPK Designs?</h2>
          <p>
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est
          </p>
        </section>
      </section>
    </div>
  );
};

export default Content;
