import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/nav.jsx";
import NameCard from "./components/nameCard.jsx";
import AppSlide from "./components/appSlide.jsx";

// detect user language
// const env = process.env;
// const language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.setState({
    });
  }
  render() {
    return (
      <div>
        <Nav/>
        <div id = "content">
          <NameCard/>
          <AppSlide/>
          <div id = "skills"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
