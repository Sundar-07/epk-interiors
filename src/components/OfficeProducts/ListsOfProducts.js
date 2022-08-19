import React from "react";
import Desktop from "../../assets/icons/pc.png";
import Laptop from "../../assets/icons/laptop.png";
import Projector from "../../assets/icons/projector.png";
import Electrical from "../../assets/icons/electrical-energy.png";
import ElectricalGen from "../../assets/icons/electric-generator.png";
import Workstation from "../../assets/icons/workstation.png";
import Tile from "../../assets/icons/tile.png";
import Chair from "../../assets/icons/chair.png";
import Ceiling from "../../assets/icons/ceiling-lamp.png";
import AC from "../../assets/icons/air-conditioner.png";
import Water from "../../assets/icons/water-filter.png";
import SecurityAcc from "../../assets/icons/mobile-security.png";

function ListsOfProducts() {
  return (
    <div>
      <div className="columns  is-multiline is-mobile">
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Desktop} />
            <figcaption>Desktop</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Laptop} />

            <figcaption>Laptop</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Projector} />

            <figcaption>Projectors</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Electrical} />

            <figcaption>Electricals</figcaption>
          </figure>
        </div>
      </div>
      <br />

      <div className="columns is-multiline is-mobile">
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Ceiling} />

            <figcaption>Ceiling</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Workstation} />
            <figcaption>Workstations</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Chair} />

            <figcaption>Chairs</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={AC} />

            <figcaption>AC</figcaption>
          </figure>
        </div>
      </div>
      <br />

      <div className="columns  is-multiline is-mobile">
        <div className="column ">
          <figure className="image is-64x64">
            <img src={Tile} />

            <figcaption>Tiles</figcaption>
          </figure>
        </div>
        <div className="column ">
          <figure className="image is-64x64">
            <img src={ElectricalGen} />

            <figcaption>Generators</figcaption>
          </figure>
        </div>

        <div className="column ">
          <figure className="image is-64x64">
            <img src={Water} />

            <figcaption>Water Purifiers</figcaption>
          </figure>
        </div>

        <div className="column ">
          <figure className="image is-64x64">
            <img src={SecurityAcc} />

            <figcaption>Security Access</figcaption>
          </figure>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ListsOfProducts;
