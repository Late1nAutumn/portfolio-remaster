import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Nav from "./components/nav.jsx";
import NameCard from "./components/nameCard.jsx";
import AppSlide from "./components/appSlide.jsx";
import WhiteAlbum from "./components/whiteAlbum.jsx";
import Footer from "./components/footer.jsx";
// import SettingTab from "./components/settingTab.jsx";
import Apps from "./components/apps.jsx";
import Journey from "./components/journey.jsx";
import BGDecoration from "./components/parts/bgDecoration.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appNum: 0,
      language: "",
      time: 0, //0,1,2,3 => morning,afternoon,evening,midnight
      displayApps: false,
      displayJourney: false,
      lightApps: false,
      lightJourney: false
    };
    this.setIndexState = this.setIndexState.bind(this);
    this.switchApps = this.switchApps.bind(this);
    this.switchJourney = this.switchJourney.bind(this);
  }
  setIndexState(obj) {
    this.setState(obj);
  }
  switchApps() {
    var temp = !this.state.displayApps;
    document.body.style.overflowY = temp ? "hidden" : "auto";
    this.setState({ displayApps: temp, displayJourney: false });
    return temp;
  }
  switchJourney() {
    var temp = !this.state.displayJourney;
    if (temp)
      document.querySelector("#journeys-branch-mask-anime").beginElement(); // get by id won't work
    document.body.style.overflowY = temp ? "hidden" : "auto";
    this.setState({ displayJourney: temp, displayApps: false });
    return temp;
  }
  getTime() {
    var date = new Date();
    var hour = date.getHours();
    console.log(
      `Local time: ${("0" + hour).slice(-2)}:${("0" + date.getMinutes()).slice(
        -2
      )}`
    );
    if (hour < 5) hour = 3;
    //midnight
    else if (hour < 12) hour = 0;
    //morning
    else if (hour < 17) hour = 1;
    //afternoon
    else if (hour < 23) hour = 2;
    //evening
    else hour = 3;
    this.setState({ time: hour });
  }
  // getLang() {
  //   var language = window.navigator.userLanguage || window.navigator.language;
  //   console.log(`System language ${language} detected`);
  // }
  // checkWindowSize() {
  //   var notCalled = true;
  //   const alertSize = () => {
  //     if (notCalled && window.innerHeight > 1382) {
  //       alert("Sorry!\nThe current styling might not fit your device");
  //       notCalled = false;
  //     }
  //   };
  //   alertSize();
  //   window.addEventListener("resize", alertSize);
  // }
  componentDidMount() {
    this.getTime();
    // this.getLang();
    // this.checkWindowSize();
    axios.post("https://whitealbum.herokuapp.com/porthub/visit");
  }
  render() {
    return (
      <div>
        <BGDecoration />
        <Nav
          setIndexState={this.setIndexState}
          switchJourney={this.switchJourney}
          switchApps={this.switchApps}
          displayApps={this.state.displayApps}
          displayJourney={this.state.displayJourney}
          lightApps={this.state.lightApps}
          lightJourney={this.state.lightJourney}
        />
        <Apps
          displayApps={this.state.displayApps}
          setIndexState={this.setIndexState}
        />
        <Journey displayJourney={this.state.displayJourney} />
        {/* <SettingTab /> */}
        <div id="content">
          <NameCard appNum={this.state.appNum} time={this.state.time} />
          <AppSlide setIndexState={this.setIndexState} />
          <WhiteAlbum />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
