import React from "react";
import data from "../data/data.jsx";

class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  introPhaseOut(bool) {
    if (bool)
      document
        .getElementById("namecard-profile-intro")
        .classList.remove("namecard-profile-intro-anime");
    else
      document
        .getElementById("namecard-profile-intro")
        .classList.add("namecard-profile-intro-anime");
  }
  render() {
    return (
      <div
        id="namecard"
        className="shadow"
        onMouseLeave={() => this.introPhaseOut(true)}
      >
        <div
          id="namecard-profile"
          onMouseOver={() => this.introPhaseOut(false)}
        >
          <div id="namecard-profile-portrait" />
          <div id="namecard-profile-info"></div>
        </div>
        <div id="namecard-screen">
          <div id="namecard-profile-intro">testtesttest</div>
          <div id="namecard-app-intro">
            <div>{data.app[this.props.appNum].name}</div>
            <div>{data.app[this.props.appNum].intro}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default NameCard;
