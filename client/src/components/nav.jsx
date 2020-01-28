import React from "react";
import Svg from "../data/svgs.jsx";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div id="nav">
        <div id="nav-container">
          <div id="nav-logo">
            <div id="nav-logo-0" className="untouchable">Prop</div>
            <div id="nav-logo-1" className="untouchable">hub</div>
          </div>
          {/* <div id = "nav-search" className = "nav"></div> */}
          <div id = "nav-login" className="untouchable">Login</div>
          <div id="nav-tabs">
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="home" />
                <div>HOME</div>
              </div>
            </div>
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="lightbulb" />
                <div>APPS</div>
              </div>
            </div>
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="mortarBoard" />
                <div>JOURNEY</div>
              </div>
            </div>
            <div className="nav-button">
              <div className="nav-button-container untouchable">
                <Svg name="phone" />
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
