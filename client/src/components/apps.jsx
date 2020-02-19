import React from "react";

import DATA from "./parts/data.jsx";
import Svg from "./parts/svgs.jsx";
import AppsContext from "./parts/appsContext.jsx";
import AppsWindow from "./parts/appsWindow.jsx";

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverID: -1,
      hoverLeave: false
    };
    this.hoverLeave = this.hoverLeave.bind(this);
    this.changeApp = this.changeApp.bind(this);
    this.onModalClick = this.onModalClick.bind(this);
  }
  onModalClick(e) {
    // checking both modal and body-wrap
    if (e.target === e.currentTarget) {
      this.props.setIndexState({ displayApps: false });
      document.body.style.overflowY = "auto";
    }
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
        onClick={this.onModalClick}
        style={{
          opacity: this.props.displayApps ? "1" : "0",
          zIndex: this.props.displayApps ? "4" : "-1"
        }}
      >
        <div id="apps-body-wrap" onClick={this.onModalClick}>
          <div id="apps-body">
            <AppsWindow appID={this.props.appsDisplayID} />
            <AppsContext appID={this.props.appsDisplayID} />
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
