import React from "react";
import axios from "axios";

import Svg from "../data/svgs.jsx";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visit: 0 };
  }
  componentDidMount() {
    axios
      .get("http://whitealbum.herokuapp.com/porthub/visit")
      .then(res => this.setState({ visit: res.data.value.count }));
  }
  render() {
    return (
      <div id="footer">
        <div id="footer-content">
          <div id="footer-left">
            <Svg name="lia" fill="white" height="40" />
            <br />
            This app is styled by pure CSS.
            <br />
            <a href="http://github.com/Late1nAutumn/porthub">Check the repo!</a>
            <br />
            {this.state.visit} guests visited this place
          </div>
          <div id="footer-right">
            <br />
            <table>
              <tr>
                <td>
                  <a href="https://github.com/Late1nAutumn">
                    <div>
                      <Svg name="github" fill="white" height="30" />
                      <p> github</p>
                    </div>
                  </a>
                </td>
                <td>
                  <a href="https://www.linkedin.com/in/conglin-pu-95b82614b/">
                    <div>
                      <Svg name="linkedin" fill="white" height="30" />
                      <p> linkedin</p>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Svg name="phone" fill="white" height="30" />
                  <p>(424)349-9661</p>
                </td>
                <td>
                  <Svg name="at" fill="white" height="30" />
                  <p> forestpu@gmail.com</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
