import React from "react";

import ClassicImg from "../../assets/offices/Classic-RegalOfficeimage.jpg";
import ColorfulImg from "../../assets/offices/colorfulseating.jpg";
import CornerDesk from "../../assets/offices/cornerDesk.jpg";
import RepurposeImg from "../../assets/offices/RepurposedOfficeimage1.jpg";

function InteriorWorks() {
  return (
    <div className="container">
      <br />
      <h1 className="title">Our Works</h1>
      <hr />
      <h3 className="subtitle">Interior Works</h3>
      <section className="hero welcome is-small">
        <div className="columns">
          <div className="column is-3">
            <figure className="image">
              <img src={ClassicImg} />
              <figcaption>
                <span className="has-text-weight-bold">Classic and Regal</span>
                <p>
                  Create a dual-desk space with your computer on one side and a
                  writing and reading space on the other.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column is-3">
            <figure className="image">
              <img src={ColorfulImg} />
              <figcaption>
                <span className="has-text-weight-bold">Colorful Seating</span>
                <p>
                  No need to book that conference room: Plenty of chic seating
                  will make meetings less dull and your office more functional.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column is-3">
            <figure className="image">
              <img src={CornerDesk} />
              <figcaption>
                <span className="has-text-weight-bold">Curved Corner Desk</span>
                <p>
                  Build your desk into the wall for an innovative and efficient
                  use of space.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="column is-3">
            <figure className="image">
              <img src={RepurposeImg} />
              <figcaption>
                <span className="has-text-weight-bold">
                  Repurposed Bar Cart
                </span>
                <p>
                  A repurposed bar cart doubles as a side table and a mobile
                  miniature shelving unit for displaying your favorite
                  accessories or keeping files organized away from the desk.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* <div className="columns">
          <div className="column is-3">
            <figure>
              <img src="https://bulma.io/images/placeholders/256x256.png" />
              <figcaption>Figure 1: Some beautiful placeholders</figcaption>
            </figure>
          </div>
          <div className="column is-3">
            <figure>
              <img src="https://bulma.io/images/placeholders/256x256.png" />
              <figcaption>Figure 1: Some beautiful placeholders</figcaption>
            </figure>
          </div>
          <div className="column is-3">
            <figure>
              <img src="https://bulma.io/images/placeholders/256x256.png" />
              <figcaption>Figure 1: Some beautiful placeholders</figcaption>
            </figure>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default InteriorWorks;
