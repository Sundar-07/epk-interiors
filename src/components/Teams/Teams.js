import React from "react";

function Teams() {
  return (
    <div className="container">
      <br />
      <h1 className="title">Our Teams</h1>
      <hr />
      <div
        className="section has-background-warning"
        style={{ borderRadius: "15px" }}
      >
        <p className="has-text-dark">
          Employees often spend more time in the office than they do at home.
          With that in mind, it makes sense that well-designed offices can
          increase employee morale, productivity, efficiency, and overall
          attitude at home. The idea is to make the office a place they want to
          be, not where they have to be.
        </p>
      </div>
      <br />
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <img src="/assets/srini.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4 has-text-centered">Srinivasan</p>
                  <p className="subtitle is-6 has-text-centered">
                    @Web Designer
                  </p>
                </div>
              </div>

              {/* <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div> */}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <img
                  src="/assets/sundar.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4 has-text-centered">Sundararajan</p>
                  <p className="subtitle is-6 has-text-centered">
                    @Web Developer
                  </p>
                </div>
              </div>

              {/* <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4 has-text-centered">John Smith</p>
                  <p className="subtitle is-6 has-text-centered">@Designation</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4 has-text-centered">John Smith</p>
                  <p className="subtitle is-6 has-text-centered">@Designation</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4 has-text-centered">John Smith</p>
                  <p className="subtitle is-6 has-text-centered">@Designation</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
    </div>
  );
}

export default Teams;
