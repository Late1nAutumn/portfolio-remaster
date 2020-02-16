import React from "react";
import axios from "axios";

import Svg from "./parts/svgs.jsx";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      // for svg colors
      hoverhome: false,
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
  clickHome() {
    this.props.setIndexState({ displayApps: false, displayJourney: false });
    document.body.style.overflowY = "auto";
    window.scroll({ top: 0, behavior: "smooth" });
  }
  clickContact() {
    if (!this.props.displayApps && !this.props.displayJourney)
      window.scroll({ top: document.body.clientHeight, behavior: "smooth" });
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
              onClick={this.clickHome.bind(this)}
            >
              <div
                className="nav-button-container untouchable"
                title="still under construction"
              >
                <Svg
                  name="home"
                  fill={
                    this.props.displayApps || this.props.displayJourney
                      ? "#c7d1d8"
                      : "white"
                  }
                />
                <div
                  style={{
                    color:
                      this.props.displayApps || this.props.displayJourney
                        ? "#c7d1d8"
                        : "white"
                  }}
                >
                  HOME
                </div>
              </div>
            </div>
            <div
              className="nav-button"
              onMouseOver={() => this.props.setIndexState({ lightApps: true })}
              onMouseLeave={() =>
                this.props.setIndexState({ lightApps: false })
              }
              onClick={this.props.switchApps}
            >
              <div className="nav-button-container untouchable">
                <Svg
                  name="lightbulb"
                  fill={
                    this.props.displayApps || this.props.lightApps
                      ? "white"
                      : "#c7d1d8"
                  }
                />
                <div
                  style={{
                    color:
                      this.props.displayApps || this.props.lightApps
                        ? "white"
                        : "#c7d1d8"
                  }}
                >
                  APPS
                </div>
              </div>
            </div>
            <div
              className="nav-button"
              onMouseOver={() =>
                this.props.setIndexState({ lightJourney: true })
              }
              onMouseLeave={() =>
                this.props.setIndexState({ lightJourney: false })
              }
              onClick={this.props.switchJourney}
            >
              <div className="nav-button-container untouchable">
                <Svg
                  name="mortarBoard"
                  fill={
                    this.props.displayJourney || this.props.lightJourney
                      ? "white"
                      : "#c7d1d8"
                  }
                />
                <div
                  style={{
                    color:
                      this.props.displayJourney || this.props.lightJourney
                        ? "white"
                        : "#c7d1d8"
                  }}
                >
                  JOURNEY
                </div>
              </div>
            </div>
            <div
              className="nav-button"
              onMouseOver={() => this.hdlHover("contact", true)}
              onMouseLeave={() => this.hdlHover("contact", false)}
              onClick={this.clickContact.bind(this)}
            >
              <div className="nav-button-container untouchable">
                <Svg
                  name="phone"
                  fill={this.state.hovercontact ? "white" : "#c7d1d8"}
                />
                <div
                  style={{
                    color: this.state.hovercontact ? "white" : "#c7d1d8"
                  }}
                >
                  CONTACT
                </div>
              </div>
            </div>
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
