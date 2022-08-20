import React from "react";
import ErrorImg from "../../assets/error.png";
import { Link } from "react-router-dom";

function ErrorFound() {
  return (
    <div className="container has-text-centered">
      <img src={ErrorImg} alt="404 Image" width="100%" height="100%" />

      <hr />
      <h1 className="title has-text-danger">Oops! No Page Found</h1>
      <div>
        <Link to="/">
          <button className="button is-link">Back to site</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorFound;
