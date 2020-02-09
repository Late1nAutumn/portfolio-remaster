import React from "react";
import Svg from "../data/svgs.jsx";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="nav">
        <div id="nav-container">
          <div id="nav-lia">
            <Svg name="lia" fill="white" height="40" />
          </div>
          {/* <div id = "nav-search" className = "nav"></div> */}
          {/* <div id="nav-login" className="untouchable" title="still under construction">
            Casual Mode
          </div> */}
          <div id="nav-tabs">
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="home" fill="white" />
                <div>HOME</div>
              </div>
            </div>
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="lightbulb" fill="white" />
                <div>APPS</div>
              </div>
            </div>
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="mortarBoard" fill="white" />
                <div>JOURNEY</div>
              </div>
            </div>
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="phone" fill="white" />
                <div>CONTACT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
