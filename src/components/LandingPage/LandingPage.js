import React from "react";
import Content from "./Content";
import DesignBg from "../../assets/landing page/designbg.jpg";

function LandingPage() {
  return (
    <div>
      <section className="hero is-medium" style={{backgroundImage:`url(${DesignBg})`,opacity: 0.9}}>
        <div className="hero-body has-text-centered">
          <h1 className="title is-2 has-text-white">
            Design term for "trust me, you'll like it"
          </h1>
          <h3 className="subtitle has-text-white">Some content</h3>
        </div>
      </section>

      {/* content */}
      <Content />
    </div>
  );
}

export default LandingPage;
