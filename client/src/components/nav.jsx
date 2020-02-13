import React from "react";
import axios from "axios";

import Svg from "../data/svgs.jsx";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      // for svg coloring
      hoverhome: false,
      hoverapps: false,
      hoverjourney: false,
      hovercontact: false
    };
    this.hdlHover = this.hdlHover.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://whitealbum.herokuapp.com/porthub/like")
      .then(res => this.setState({ like: Number(res.data) }));
  }
  like() {
    axios
      .post("https://whitealbum.herokuapp.com/porthub/like")
      .then(res => this.setState({ like: this.state.like + 1 }));
  }
  hdlHover(name, value) {
    this.setState({ ["hover" + name]: value });
  }
  render() {
    return (
      <div id="nav">
        <div id="nav-container">
          <div id="nav-lia">
            <Svg name="lia" fill="white" height="40" />
          </div>
          <div id="nav-tabs">
            <div
              className="nav-button"
              onMouseOver={() => this.hdlHover("home", true)}
              onMouseLeave={() => this.hdlHover("home", false)}
            >
              <div
                className="nav-button-container untouchable"
                title="still under construction"
              >
                <Svg
                  name="home"
                  fill={this.state.hoverhome ? "white" : "#c7d1d8"}
                />
                <div>HOME</div>
              </div>
            </div>
            <div
              className="nav-button"
              onMouseOver={() => this.hdlHover("apps", true)}
              onMouseLeave={() => this.hdlHover("apps", false)}
            >
              <div
                className="nav-button-container untouchable"
                title="still under construction"
              >
                <Svg
                  name="lightbulb"
                  fill={this.state.hoverapps ? "white" : "#c7d1d8"}
                />
                <div>APPS</div>
              </div>
            </div>
            <div
              className="nav-button"
              onMouseOver={() => this.hdlHover("journey", true)}
              onMouseLeave={() => this.hdlHover("journey", false)}
            >
              <div
                className="nav-button-container untouchable"
                title="still under construction"
              >
                <Svg
                  name="mortarBoard"
                  fill={this.state.hoverjourney ? "white" : "#c7d1d8"}
                />
                <div>JOURNEY</div>
              </div>
            </div>
            <a href="#footer">
              <div
                className="nav-button"
                onMouseOver={() => this.hdlHover("contact", true)}
                onMouseLeave={() => this.hdlHover("contact", false)}
              >
                <div className="nav-button-container untouchable">
                  <Svg
                    name="phone"
                    fill={this.state.hovercontact ? "white" : "#c7d1d8"}
                  />
                  <div>CONTACT</div>
                </div>
              </div>
            </a>
          </div>
          <div
            id="nav-like"
            onClick={this.like.bind(this)}
            className="untouchable"
          >
            <b>{this.state.like + " "}</b>Elves liked me!
            <div>
              <Svg name="heart" fill="crimson" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
