import React from "react";
import DATA from "../data/data.jsx";
import Svg from "../data/svgs.jsx";

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
        style={{
          backgroundImage: `url("./asset/nameCardBG-${this.props.time}.jpg")`
        }}
      >
        <div
          id="namecard-profile"
          onMouseOver={() => this.introPhaseOut(false)}
        >
          <div id="namecard-profile-portrait" title="He's awesome" />
          <div id="namecard-profile-info">
            <b>Conglin Pu</b>
            <br className="untouchable" />
            (Forest)
            <br className="untouchable" />
            Software Engineer
            <br className="untouchable" />
            <br className="untouchable" />
            {DATA.openToJobs ? <b id="namecard-profile-openToJobs">Open to job opportunities!</b> : null}
          </div>
        </div>
        <div id="namecard-screen" className="untouchable">
          <div id={"namecard-greet-" + this.props.time}>
            {(() => {
              switch (this.props.time) {
                case 0:
                  return "Good Morning";
                case 1:
                  return "Good Afternoon";
                case 2:
                  return "Good Evening";
                case 3:
                  return (
                    <div>
                      Don't stay up
                      <br />
                      too late
                    </div>
                  );
              }
            })()}
          </div>
          <div id="namecard-profile-intro">
            <div id="namecard-profile-intro-container">testtesttest</div>
          </div>
          <div id="namecard-app-intro">
            <div id="namecard-app-intro-container">
              <div id="namecard-app-intro-name">{DATA.app[this.props.appNum].name}</div>
              <div id="namecard-app-intro-describe">{DATA.app[this.props.appNum].describle}</div><br/>
              <div id="namecard-app-intro-context">{DATA.app[this.props.appNum].intro}</div>
              <div id="namecard-app-intro-decoration">
                <Svg name="react" height="400" fillOpacity="0.1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NameCard;
