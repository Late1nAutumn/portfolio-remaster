import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Nav from "./components/nav.jsx";
import NameCard from "./components/nameCard.jsx";
import AppSlide from "./components/appSlide.jsx";
import WhiteAlbum from "./components/whiteAlbum.jsx";
import Footer from "./components/footer.jsx";
import SettingTab from "./components/settingTab.jsx";
import Journey from "./components/journey.jsx";
import BGDecoration from "./components/parts/bgDecoration.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appNum: 0,
      language: "",
      time: 0 //0,1,2,3 => morning,afternoon,evening,midnight
    };
  }
  setIndexState(obj) {
    this.setState(obj);
  }
  getLang() {
    var language = window.navigator.userLanguage || window.navigator.language;
    console.log(`System language ${language} detected`);
    // Todo
  }
  getTime() {
    var date = new Date();
    var hour = date.getHours();
    console.log(`Local time: ${("0" + hour).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`);
    if (hour < 5) hour = 3; //midnight
    else if (hour < 12) hour = 0; //morning
    else if (hour < 17) hour = 1; //afternoon
    else if (hour < 23) hour = 2; //evening
    else hour = 3;
    this.setState({ time: hour });
  }
  componentDidMount() {
    this.getLang();
    this.getTime();
    axios.post("https://whitealbum.herokuapp.com/porthub/visit");
  }
  render() {
    return (
      <div>
        <Journey />
        <BGDecoration />
        <Nav />
        {/* <SettingTab /> */}
        <div id="content">
          <NameCard appNum={this.state.appNum} time={this.state.time} />
          <AppSlide setIndexState={this.setIndexState.bind(this)} />
          <WhiteAlbum />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
