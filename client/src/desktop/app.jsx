import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";

import Cover from "./cover";
import Journey from "./journey";
import Skill from "./skill";
import AppList from "./appList";
import Contact from "./contact";

// TODO:
// dynamic features
// navigation back

const VIEW_ID = ["#cover", "#journey", "#skill", "#applist", "#contact"];
const VIEW_INDEX = {
  "#cover": 0,
  "#journey": 1,
  "#skill": 2,
  "#applist": 3,
  "#contact": 4,
};

class App extends React.Component {
  constructor(props) {
    console.log("version:2.1.2 Safari patch");
    super(props);
    this.WheelCD = false; // last 800 ms, delay 50 ms (40 also acceptable)
    this.DenyScroll = false; // window last 100 ms
    this.DenyTimeout = undefined; // avoid fire during time window gaps
    this.TouchStartY = undefined;

    this.state = {
      isSafari: false,
      vh: 0,
      actView: VIEW_INDEX[window.location.hash] || 0,
      progress: VIEW_INDEX[window.location.hash] || -1,
      v1stage: VIEW_INDEX[window.location.hash] > 1 ? 2 : 0, // for arrow
      v2stage: VIEW_INDEX[window.location.hash] > 2 ? 6 : -1, // freeze:-1; anime: 0 to 4; arrow: 5
      v3stage: VIEW_INDEX[window.location.hash] > 3 ? 4 : 0, // opacity:0 to 3; arrow:4
      // animating: false,
      // MDevMsg: 0, // for dev on mobile
    };
    this.launchAnimation = this.launchAnimation.bind(this);
    this.scrollCDTrigger = this.scrollCDTrigger.bind(this);
    this.denyScrollEvent = this.denyScrollEvent.bind(this);
    this.wheelRoll = this.wheelRoll.bind(this);
    this.keyNavi = this.keyNavi.bind(this);
    this.touchNavi = this.touchNavi.bind(this);
    this.switchView = this.switchView.bind(this);
    this.resize = this.resize.bind(this);
  }
  launchAnimation(view) {
    if (view === 1) {
      setTimeout(() => {
        this.setState({ v1stage: 1 });
      }, 6000);
      document.getElementById("journey-clipPath0-a0").beginElement();
      document
        .getElementById("journey-stem")
        .classList.add("journey-stem-anime");
      document
        .getElementById("journey-end")
        .classList.add("journey-end-fadeIn");
    } else if (view === 2) {
      this.setState({ v2stage: 0 });
      setTimeout(() => {
        this.setState({ v2stage: 1 });
        document.getElementById("skill-svg-start").beginElement();
      }, 500);
      setTimeout(() => {
        this.setState({ v2stage: 2 });
        document.getElementById("view2").style.backgroundColor = "#000060";
      }, 1200);
      setTimeout(() => this.setState({ v2stage: 3 }), 1700);
      setTimeout(() => this.setState({ v2stage: 4 }), 1900);
      setTimeout(() => this.setState({ v2stage: 5 }), 5900);
    } else if (view === 3) {
      var staging = (i) => {
        setTimeout(() => {
          this.setState({ v3stage: i });
          if (i < 3) staging(i + 1);
        }, 700);
      };
      staging(1);
      setTimeout(() => this.setState({ v3stage: 4 }), 6100);
    }
  }
  scrollCDTrigger() {
    this.WheelCD = true;
    setTimeout(() => {
      this.WheelCD = false;
    }, 800);
  }
  denyScrollEvent() {
    // to avoid view change triggered by scrolling on other components
    // Depreciated approach
    clearTimeout(this.DenyTimeout);
    this.DenyScroll = true;
    this.DenyTimeout = setTimeout(() => {
      this.DenyScroll = false;
    }, 100);
  }
  wheelRoll(e) {
    var deltaY = e.deltaY;
    // Depreciated approach
    setTimeout(() => {
      if (this.WheelCD || this.DenyScroll) return;
      this.scrollCDTrigger();
      this.switchView(deltaY > 0 ? 1 : -1);
    }, 50);
  }
  keyNavi({ key }) {
    if (this.WheelCD) return;
    this.scrollCDTrigger();
    if (key === "ArrowUp" || key === "PageUp") this.switchView(-1);
    else if (key === "ArrowDown" || key === "PageDown") this.switchView(1);
  }
  touchNavi(e) {
    // e.preventDefault(); written elsewhere
    setTimeout(() => {
      if (this.WheelCD || this.DenyScroll) return;
      if (this.TouchStartY) {
        this.scrollCDTrigger();
        if (this.TouchStartY > e.touches[0].pageY)
          setTimeout(() => this.switchView(1), 300);
        else setTimeout(() => this.switchView(-1), 300);
      }
      this.TouchStartY = e.touches[0].pageY;
    }, 50);
  }
  switchView(dir) {
    if (
      (dir < 0 && this.state.actView === 0) ||
      (dir > 0 && this.state.actView === 4)
    )
      return;
    var direction = dir > 0 ? 1 : -1;
    var newView = this.state.actView + direction;
    window.location = VIEW_ID[newView];
    // keep animation until view switch end
    this.setState({ actView: this.state.actView + direction / 2 });
    setTimeout(() => {
      this.TouchStartY = undefined;
      window.scrollTo(0, newView * this.state.vh);
    }, 10);
    setTimeout(() => {
      this.setState({ actView: newView });
    }, 500);

    setTimeout(() => {
      if (newView > this.state.progress) {
        this.launchAnimation(newView);
        this.setState({ progress: newView });
      }
    }, 800);
  }
  resize() {
    this.setState({ vh: document.getElementById("view0").clientHeight }, () =>
      window.scrollTo(0, this.state.actView * this.state.vh)
    );
  }
  componentDidMount() {
    console.log(
      "isS:" +
        (navigator.userAgent.indexOf("Safari") > -1 &&
          !(navigator.userAgent.indexOf("Chrome") > -1))
    );
    this.setState({
      isSafari:
        navigator.userAgent.indexOf("Safari") > -1 &&
        !(navigator.userAgent.indexOf("Chrome") > -1),
    });
    if (window.performance) {
      console.log("navigationType:" + performance.navigation.type);
      console.log("progress:" + (VIEW_INDEX[window.location.hash] || -1));
      // start current view anime if load by refresh
      if (
        performance.navigation.type === 1 &&
        VIEW_INDEX[window.location.hash]
      ) {
        window.onmousewheel = this.wheelRoll;
        window.addEventListener("keydown", this.keyNavi);
        window.addEventListener("touchmove", this.touchNavi);
        this.launchAnimation(VIEW_INDEX[window.location.hash]);
      }
    }
    this.resize();
    window.addEventListener("resize", this.resize);

    window.addEventListener("touchmove", (e) => e.preventDefault());

    // following listeners are added in Cover
    // window.onmousewheel = this.wheelRoll;
    // window.addEventListener("keydown", this.keyNavi);
    // window.addEventListener("touchmove", this.touchNavi);
  }
  render() {
    return (
      <div>
        {/* <div id="mobileDev">{this.state.MDevMsg}</div> */}
        <div className="view" id="view0">
          <Cover
            actView={this.state.actView < 1}
            progressed={this.state.progress > 0}
            nextView={() => this.switchView(1)}
            wheelRoll={this.wheelRoll}
            keyNavi={this.keyNavi}
            touchNavi={this.touchNavi}
            safari={this.state.isSafari}
          />
        </div>
        <div className="view" id="view1">
          <Journey
            actView={this.state.actView > 0 && this.state.actView < 2}
            stage={this.state.v1stage}
            progressed={this.state.progress > 1}
            nextView={() => this.switchView(1)}
          />
        </div>
        <div className="view" id="view2">
          <Skill
            actView={this.state.actView > 1 && this.state.actView < 3}
            stage={this.state.v2stage}
            progressed={this.state.progress > 2}
            nextView={() => this.switchView(1)}
          />
        </div>
        <div className="view" id="view3">
          <AppList
            DenyScroll={this.denyScrollEvent}
            stage={this.state.v3stage}
            progressed={this.state.progress > 3}
            nextView={() => this.switchView(1)}
          />
        </div>
        <div className="view" id="view4">
          <Contact actView={this.state.actView > 3 && this.state.actView < 5} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
