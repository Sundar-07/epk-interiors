import React from "react";
import Services from "./Services";
import EPKImg from "../../assets/epk.jpg";
import CarouselWorks from "./CarouselWorks";

function AboutUs() {
  return (
    <div className="container content">
      <br />
      <h1 className="title">About Us</h1>
      <hr />

      <div className="hero-body">
        <div className="columns is-vcentered">
          <div className="column">
            <h2 className="has-text-weight-bold is-size-3 is-uppercase">
              ABSOLUTE CORPORATE SOLUTION
            </h2>
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
              Our professionals help clients make informed decisions to achieve
              a competitive advantage by managing risk, reducing costs and
              increasing operational efficiencies. A Strategic outsourcing by
              the Companies benefits them such as,
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
          <div className="column is-5">
            <figure className="image is-4by3">
              <img src={EPKImg} alt="EPK Description" />
            </figure>
          </div>
        </div>
      </div>

      {/* <Services /> */}
      <h1>Our Clients</h1>
      <CarouselWorks />
      <div className="section has-background-info" style={{borderRadius:"15px"}}>
        <p className="has-text-white">
          Clients and customers also receive messages from office design. If an
          office is cluttered, outdated, and poorly design, customers and
          clients might think the same about the company. On the other hand,
          organized, pleasing, and well thought-out design tells people about
          the brand, what it stands for, its success, and promotes confidence in
          the business. In this regard, office interior design is similar to
          “dress for success.”
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
