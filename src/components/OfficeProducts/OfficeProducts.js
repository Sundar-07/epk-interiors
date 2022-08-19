import React from "react";
import ListsOfProducts from "./ListsOfProducts";

function OfficeProducts() {
  return (
    <>
      <div className="container">
        <br></br>
        <div className="content container">
          <h1>Office Products</h1>
          <p>
            Our products range from Desktop, Laptop, Projectors, Electrical,
            Tiles, False Ceiling, Workstations, Chairs, Air Conditioners,
            Generators, Carpets, UPVC Doors, Windows, Security Access Systems,
            Paints, Shutters, LED Display, Water Purifier,, etc.
          </p>
          <p>
            All our products are acquired directly from the manufacturers, hence
            we can provide better discount on bulk orders. We strongly believe
            in building long term relationships with our clients and we go to
            great lengths to ensure our valuable clients receive timely services
            and high quality products.
          </p>
        </div>
        {/* ListsOfProducts */}

        <ListsOfProducts />
    <br/>
        {/* Subcribe */}
      </div>
      <section className="hero is-dark welcome is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              Contact us for more exclusive offers!
            </h1>
            <p className="subtitle has-text-centered">Get 10% discount and be the first to know about new collections and offers.</p>

            <div className="box has-background-dark">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-rounded"
                    type="email"
                    placeholder="Enter your email"
                  />
                </p>
                <p className="control">
                  <a className="button is-info">Notify Me</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfficeProducts;
