import React from "react";
import Data from "./parts/data.jsx";
import Svg from "./parts/svgs.jsx";

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appID: 0,
      hoverID: -1
    };
    this.hdlchange = this.hdlchange.bind(this);
  }
  hdlchange(e, name) {
    this.setState({ [name]: e.target.id.slice(17) });
  }
  clickLeave() {
    this.props.setIndexState({ displayApps: false });
    document.body.style.overflowY = "auto";
  }
  render() {
    return (
      <div
        className="modal"
        style={{ display: this.props.displayApps ? "block" : "none" }}
      >
        <div id="apps-body-wrap">
          <div id="apps-body">
            <div id="apps-window">
              <div id="apps-window-name" className="untouchable">
                {Data.app[this.state.appID].name}
              </div>
            </div>
            <div id="apps-context">testtesttest</div>
          </div>
        </div>
        <div id="apps-sidebar-wrap" className="untouchable">
          <div id="apps-sidebar">
            <div id="apps-sidebar-title">APPS</div>
            <div id="apps-sidebar-list">
              {Data.app.map((obj, i) => (
                <div
                  id={"apps-sidebar-item" + i}
                  className="apps-sidebar-item"
                  key={i}
                  onClick={e => this.hdlchange(e, "appID")}
                  onMouseOver={e => this.hdlchange(e, "hoverID")}
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
                      ? this.state.appID
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
                      ? this.state.appID
                      : this.state.hoverID) *
                      115 +
                    "px"
                }}
              />
            </div>
          </div>
          <div id="apps-sidebar-leave" onClick={this.clickLeave.bind(this)}>
            <Svg name="leave" fill="white" height="70" />
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
