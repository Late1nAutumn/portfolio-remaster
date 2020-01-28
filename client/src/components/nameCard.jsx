import React from "react";

class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  detailPhaseIn(e) {
    document
      .getElementById("profile-details")
      .classList.add("profile-details-anime");
  }
  detailPhaseOut(e) {
    document
      .getElementById("profile-details")
      .classList.remove("profile-details-anime");
  }
  render() {
    return (
      <div id="namecard" onMouseLeave={this.detailPhaseOut}>
        <div id="profile" className="shadow" onMouseOver={this.detailPhaseIn}>
          <div id="profile-portrait" />
          <div id="profile-info"></div>
        </div>
        <div id="screen" className="shadow">
          <div id="profile-details">
            <div id="profile-details-content">testtesttest</div>
            <div id="profile-details-decorate"/>
          </div>
        </div>
      </div>
    );
  }
}
export default NameCard;
