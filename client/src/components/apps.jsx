import React from "react";

import AppsDetail from "./parts/appsDetail.jsx";
import DATA from "./parts/data.jsx";
import Svg from "./parts/svgs.jsx";

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverID: -1,
      hoverLeave: false
    };
    this.hoverLeave = this.hoverLeave.bind(this);
    this.changeApp = this.changeApp.bind(this);
  }
  changeApp(e) {
    document.getElementById("apps-context").scroll(0, 0);
    this.props.setIndexState({
      appsDisplayID: Number(e.target.id.slice(17))
    });
  }
  hoverLeave(hover) {
    this.setState({ hoverLeave: hover });
  }
  clickLeave() {
    this.props.setIndexState({ displayApps: false });
    document.body.style.overflowY = "auto";
  }
  render() {
    return (
      <div
        id="apps-modal"
        className="modal"
        style={{
          opacity: this.props.displayApps ? "1" : "0",
          zIndex: this.props.displayApps ? "4" : "-1"
        }}
      >
        <div id="apps-body-wrap">
          <div id="apps-body">
            <div id="apps-window">
              <div id="apps-window-name" className="untouchable">
                {DATA.app[this.props.appsDisplayID].name}
              </div>
            </div>
            <div id="apps-context">
              <AppsDetail appID={this.props.appsDisplayID} />
            </div>
            <div className="apps-body-edge" />
          </div>
        </div>
        <div id="apps-sidebar-wrap" className="untouchable">
          <div
            id="apps-sidebar"
            style={{ left: this.props.displayApps ? "-350px" : "0" }}
          >
            <div id="apps-sidebar-title">APPS</div>
            <div id="apps-sidebar-list">
              {DATA.app.map((obj, i) => (
                <div
                  id={"apps-sidebar-item" + i}
                  className="apps-sidebar-item"
                  key={i}
                  onClick={this.changeApp}
                  onMouseOver={e =>
                    this.setState({ hoverID: Number(e.target.id.slice(17)) })
                  }
                  onMouseLeave={() => this.setState({ hoverID: -1 })}
                >
                  {obj.name}
                </div>
              ))}
              <div
                id="apps-sidebar-anime1"
                style={{
                  top:
                    62 +
                    (this.state.hoverID === -1
                      ? this.props.appsDisplayID
                      : this.state.hoverID) *
                      115 +
                    "px"
                }}
              />
              <div
                id="apps-sidebar-anime2"
                style={{
                  top:
                    51 +
                    (this.state.hoverID === -1
                      ? this.props.appsDisplayID
                      : this.state.hoverID) *
                      115 +
                    "px"
                }}
              />
            </div>
            <div
              id="apps-sidebar-leave"
              onMouseOver={() => this.hoverLeave(true)}
              onMouseLeave={() => this.hoverLeave(false)}
              onClick={this.clickLeave.bind(this)}
            >
              <Svg
                name="leave"
                fill={this.state.hoverLeave ? "#f5f5f5" : "#c7d1d8"}
                height="70"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
