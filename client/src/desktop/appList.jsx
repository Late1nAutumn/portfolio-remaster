import React from "react";

// import AppDetail from "./sub/appDetail";
import Arrow from "./sub/arrow";

const { DATA } = require("./data/appList_data");

class AppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: 2,
    };
    this.switchApp = this.switchApp.bind(this);
  }
  switchApp(i) {
    this.setState({ app: i });
    document.getElementById("applist-content").scrollTo(0, 0);
  }
  render() {
    return (
      <div id="applist">
        <div id="applist-title" className="untouchable">
          MY PROJECTS
        </div>
        <div
          id="applist-list"
          style={{ opacity: this.props.stage > 0 ? "1" : "0" }}
        >
          {DATA.map((app, i) => (
            <div
              className="applist-img shadow"
              style={{ backgroundImage: `url(../asset/applist/app${i}.jpg)` }}
              onMouseEnter={() => this.switchApp(i)}
              onClick={() => this.switchApp(i)}
              key={i}
            >
              <div
                className="applist-img-shade"
                style={{ opacity: this.state.app === i ? "0" : "0.4" }}
              />
            </div>
          ))}
        </div>
        <div
          id="applist-pointer"
          style={{
            left: 21.875 * this.state.app + 28.125 + "%",
            opacity: this.props.stage > 2 ? "1" : "0",
          }}
        />
        <div
          id="applist-contentBGC"
          style={{ height: this.props.stage > 1 ? "calc(50% + 40px)" : "0" }}
        />
        <div
          id="applist-content"
          onScroll={this.props.denyScroll}
          onTouchMove={this.props.denyScroll}
          style={{ opacity: this.props.stage > 2 ? "1" : "0" }}
        >
          <div>
            <div className="applist-appTitle">{DATA[this.state.app].name}</div>
            <div className="applist-appSubtitle">
              {DATA[this.state.app].role}
            </div>
          </div>
          <p className="applist-desc">{DATA[this.state.app].desc}</p>
          <ul>
            {DATA[this.state.app].bullet.map((text, i) => (
              <li className="applist-highlights" key={i}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        {this.props.stage === 4 && !this.props.progressed ? (
          <Arrow nextView={this.props.nextView} />
        ) : null}
      </div>
    );
  }
}

export default AppList;
