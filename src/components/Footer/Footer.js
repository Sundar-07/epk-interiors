import React from "react";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <footer class="footer has-background-light">
        <div class="content has-text-centered">
          <p>
            &#169; <span>{getCurrentYear()}</span> All Rights Reserved by{" "}
            <strong>EPK Group</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
