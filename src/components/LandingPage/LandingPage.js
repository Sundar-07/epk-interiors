import React from "react";
import Content from "./Content";
import DesignBg from "../../assets/landing page/designbg.jpg";

function LandingPage() {
  return (
    <div>
      <section
        className="hero is-medium"
        style={{ backgroundImage: `url(${DesignBg})`, opacity: 0.9 }}
      >
        <div className="hero-body has-text-centered">
          <div
            className="mx-auto box p-auto has-background-light"
            style={{ borderRadius: "20px" }}
          >
            <h1 className="title is-2 has-text-dark">
              Design term for "trust me, you'll like it"
            </h1>
            <h3 className="subtitle has-text-dark">
              Interior design consciously and subconsciously influences people’s
              moods and energy on a daily basis.{" "}
            </h3>
          </div>
        </div>
      </section>

      {/* content */}
      <Content />
    </div>
  );
}

export default LandingPage;
