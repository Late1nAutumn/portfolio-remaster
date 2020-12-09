import React from "react";

import AppDetail from "./sub/appDetail";
import Arrow from "./sub/arrow";

const { DATA } = require("./data/appList_data");

class AppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: 0,
    };
    this.switchApp = this.switchApp.bind(this);
  }
  switchApp(i) {
    this.setState({ app: i });
    document.getElementById("applist-content").scrollTo(0, 0);
  }
  componentDidMount() {}
  render() {
    return (
      <div id="applist">
        <div id="applist-title" className="untouchable">
          MY APP
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
            />
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
          onScroll={this.props.DenyScroll}
          onTouchMove={this.props.DenyScroll}
          style={{ opacity: this.props.stage > 2 ? "1" : "0" }}
        >
          <div>
            <div className="applist-appTitle">{DATA[this.state.app].name}</div>
            <div className="applist-appDescrip">
              {DATA[this.state.app].descrip}
            </div>
          </div>
          {DATA[this.state.app].intro.map((text, i) => (
            <p className="applist-highlights" key={i}>
              {text}
            </p>
          ))}
          <AppDetail appID={this.state.app} />
        </div>
        {this.props.stage === 4 && !this.props.progressed ? (
          <Arrow nextView={this.props.nextView} />
        ) : null}
      </div>
    );
  }
}

export default AppList;
