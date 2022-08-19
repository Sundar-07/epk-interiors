import React from "react";
import Services from "./Services";

function AboutUs() {
  return (
    <div className="container content">
      <br />
      <h1 className="title">About Us</h1>
      <hr />
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 className="has-text-weight-bold is-size-2 is-uppercase">
                ABSOLUTE CORPORATE SOLUTION
              </h1>
              <p>
                EPK GROUP having its vision Globally offers a wide spectrum of
                services to all your corporate needs. This includes Business
                requirements related to,
              </p>
              <div className="columns">
                <div className="column">
                  <ul>
                    <li>Business Feasibility Study</li>
                    <li>Setting up Interior / Infrastructure</li>
                    <li>Business Process Outsourcing(BPO)</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Finding Office Place</li>
                    <li>Recruitment</li>
                    <li>Marketing Strategy Consulting</li>
                  </ul>
                </div>
              </div>
              <p>
                Our professionals help clients make informed decisions to
                achieve a competitive advantage by managing risk, reducing costs
                and increasing operational efficiencies. A Strategic outsourcing
                by the Companies benefits them such as,
              </p>
              <div className="columns">
                <div className="column">
                  <ul>
                    <li>Accessing Skilled Expertise</li>
                    <li>Reducing Overhead</li>
                    <li>Flexible Staffing</li>
                    <li> Increasing Efficiency Advertising</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Reducing Turnaround Time</li>
                    <li>Generating more profit</li>
                    <li>Reduces the Need for Direct</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column is-5">
              <figure class="image is-4by3">
                <img
                  src="https://picsum.photos/800/600/?random"
                  alt="Description"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <h1>Our Services</h1>
      <Services />
      <h1>Our Clients</h1>
    </div>
  );
}

export default AboutUs;
