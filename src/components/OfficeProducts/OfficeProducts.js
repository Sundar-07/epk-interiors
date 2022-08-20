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
        <br />
        <section className="section has-background-danger" style={{borderRadius:"15px"}}>
          <div className="container">
            <h3 className="has-text-centered has-text-white is-size-5">
              Office design also conveys the type of business it is. For
              instance, a lawyer&apos;s office may appear more sophisticated and
              professional with darker colors and straight lines, while a
              graphic design office may be more fun and creative with bright
              colors and designs. This is an important factor to consider
              because it shows the business&apos;s function and purpose.
            </h3>
          </div>
        </section>
        <br />
        {/* Subcribe notify */}
      </div>
      <section className="hero is-dark welcome is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              Contact us for more exclusive offers!
            </h1>
            <p className="subtitle has-text-centered">
              Get 10% discount and be the first to know about new collections
              and offers.
            </p>

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
