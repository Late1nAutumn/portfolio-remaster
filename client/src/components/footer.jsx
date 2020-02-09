import React from "react";

import Svg from "../data/svgs.jsx";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div id="footer">
        <div id="footer-content">
          github
          <br />
          linkedin
          <br />
          tel
          <br />
          email
          <br />
          pure css
          <br />
          repo link
        </div>
      </div>
    );
  }
}

export default Footer;
