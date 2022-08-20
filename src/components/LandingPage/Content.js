import React from "react";
import DesignLogo from "../../assets/landing page/designs.png";
import SupportLogo from "../../assets/landing page/support.png";
import MarketLogo from "../../assets/landing page/market.png";
import DeliveryLogo from "../../assets/landing page/delivery.png";
import CarouselPage from "./CarouselPage";
const Content = () => {
  return (
    <div className="container">
      {/* Importance Content */}
      <section className="section">
        <section className="container content">
          <h2 className="title has-text-centered">
            The Importance of Office Interior Design
          </h2>
          <p>
            Office design is vital to both employees and customers. For
            employees who spend a large part of their day in an office, it is
            crucial to create a space that&apos;s functional, visually
            appealing, comfortable, and inviting—all of which promote
            productivity and efficiency. For customers, office design sets the
            tone for a business and tells a story about the brand,
            professionalism, and success.
          </p>
          <p>
            Similar to evidence-based design in healthcare settings, interior
            design—no matter what the location—affects people&apos;s moods,
            attitudes, inspiration, drive, and everything in between. That is
            why building a space conducive for owners, employees, and customers
            is no longer being considered just a luxury, it&apos;s becoming a
            necessity.
          </p>
        </section>
      </section>

      {/* Experts epk */}
      <section className="section has-background-link">
        <div className="container">
          <div className="is-vcentered columns is-multiline">
            <div className="column is-6 is-5-desktop mb-4">
              {/* <span className="has-text-white">Lorem ipsum</span> */}
              <h2 className="has-text-white mt-2 mb-3 is-size-2 is-size-3-mobile has-text-weight-bold">
                EPK Group Interior Design Experts:
              </h2>
              <p className="has-text-white">
                When it comes to creating a productive and inspiring work
                environment, without compromising sleek, high-end decor, these
                designers know how to do it. Browse these office design ideas to
                find inspiration from these commercial offices, studios,
                conference rooms and more, to inform your own personal workspace
                design..
              </p>
            </div>
            <div className="column is-5 ml-auto">
              <div className="mx-auto box p-6 has-background-light">
                <h4 className="is-size-5 mb-2 has-text-weight-bold has-text-centered">
                  Working 9 to 5 has never looked better:
                </h4>
                <p className="has-text-grey-dark mb-4">
                  There is a reason why successful businesses spend time and
                  energy ensuring their offices are well-designed. Not only does
                  it create a healthy workplace, an office environment has the
                  ability to enhance and support the success of a business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* Martin */}
      <div className="content">
        <blockquote>
          <span className="has-text-weight-bold"> Martin Reeves,</span>{" "}
          <span className="has-text-weight-semibold">
            Head of Office Design at Maris Interiors
          </span>{" "}
          says, “Good office design combines both science and emotion &ndash; it
          is vital to balance both. A well-designed office will help attract and
          retain the best staff and can also significantly reduce your real
          estate costs.”
        </blockquote>
      </div>

      {/* Lists of  */}
      <div className="columns">
        <div className="column is-one-quarter">
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
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={DesignLogo} alt="some image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="is-size-4 has-text-centered">Live Designs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
