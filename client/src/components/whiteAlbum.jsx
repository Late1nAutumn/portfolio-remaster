import React from "react";

import Snowflake from "./parts/wASnowflake.jsx";
import DATA from "../data/data.jsx";

var snowflakeTimeoutID;

class WhiteAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snowflakeFalling: true,
      showingSkillID: 0
    };
    this.snowflakeFall = this.snowflakeFall.bind(this);
  }
  snowballFall(sizeP, startP, durationP, xP, dxP) {
    var size = sizeP || Math.floor(Math.random() * 30) + 20; // px
    var start = startP || Math.floor(Math.random() * 1000); // ms
    var duration = durationP || Math.floor(Math.random() * 1500) + 3500; // ms
    var x = xP || Math.floor(Math.random() * 1000) - size / 2; // px
    var dx = dxP || Math.floor(Math.random() * 60) - 15; // px

    var snowball = document.createElement("div");
    snowball = document.getElementById("WA-container").appendChild(snowball);
    snowball.className = "WA-snowball";
    Object.assign(snowball.style, {
      width: size + "px",
      height: size + "px",
      left: x + "px",
      top: 0 - size * 2 + "px",
      transition: duration / 1000 + "s",
      transitionTimingFunction: "linear"
    });
    setTimeout(() => {
      Object.assign(snowball.style, {
        top: "360px",
        left: x + dx + "px"
      });
    }, start);
    setTimeout(() => {
      document.getElementById("WA-container").removeChild(snowball);
    }, start + duration + 100);
  }
  bigSnowball() {
    var size = Math.floor(Math.random() * 200) + 150;
    this.snowballFall(size, 0, 2000);
    var nextTime = Math.floor(Math.random() * 5000) + 4000;
    setTimeout(() => {
      this.bigSnowball();
    }, nextTime);
  }
  snowFall() {
    setInterval(() => {
      for (var i = 0; i < 5; i++) {
        this.snowballFall();
      }
    }, 700);
  }
  snowflakeFall() {
    this.setState({ snowflakeFalling: true });
    var node = document.getElementById("WA-snowflake");
    node.style.transition = "none";
    var x = Math.floor(Math.random() * 500) + 400 + "px";
    Object.assign(node.style, {
      left: x,
      top: "-100px"
    });
    document
      .getElementById("WA-snowflake-svg")
      .classList.remove("WA-snowflake-svg-anime");
    document.getElementById("WA-snowflake-svg").style.transform = "scale(1)";
    setTimeout(() => {
      node.style.transition = "20s";
      setTimeout(() => {
        node.style.top = "351px"; // instant assign won't work
      }, 0);
      snowflakeTimeoutID = setTimeout(() => {
        this.snowflakeFall();
      }, 20000);
    }, 100); // idk why 0ms doesn't work, maybe burden for browser is too heavy
  }
  hoverSnowflake() {
    if (!this.state.snowflakeFalling) return;
    clearTimeout(snowflakeTimeoutID);
    var node = document.getElementById("WA-snowflake");
    Object.assign(node.style, {
      top: node.offsetTop + "px",
      transition: "none",
      transitionTimingFunction: "linear"
    });
  }
  leaveSnowflake() {
    if (!this.state.snowflakeFalling) return;
    var node = document.getElementById("WA-snowflake");
    var duration = (351 - node.offsetTop) / 23; // keep a same falling speed, 23 = 451px / 20s
    Object.assign(node.style, {
      top: "351px",
      transition: duration + "s",
      transitionTimingFunction: "linear"
    });
    clearTimeout(snowflakeTimeoutID);
    snowflakeTimeoutID = setTimeout(() => {
      this.snowflakeFall();
    }, duration * 1000);
  }
  focusSnowflake() {
    if (!this.state.snowflakeFalling) return;
    this.setState({ snowflakeFalling: false });
    document.getElementById("WA-skill-notice").style.display = "none";
    Object.assign(document.getElementById("WA-snowflake").style, {
      left: "51px",
      top: "225px",
      transition: "3s",
      transitionTimingFunction: "linear"
    });
    document
      .getElementById("WA-snowflake-svg")
      .classList.add("WA-snowflake-svg-anime");
    setTimeout(() => {
      document.getElementById("WA-skill").style.display = "block";
      document.getElementById("WA-skillImg").style.display = "block";
      document.getElementById("WA-snowflake").style.transition = "none";
      document.getElementById("WA-snowflake").style.opacity = "0";
    }, 3000);
  }
  blurSnowflake() {
    var node = document.getElementById("WA-snowflake");
    node.style.transition = "none";
    node.style.opacity = "1";
    setTimeout(() => {
      node.style.transition = "2s";
      node.style.transitionTimingFunction = "linear";
      node.style.top = "900px";
      document.getElementById("WA-skill").style.display = "none";
      document.getElementById("WA-skillImg").style.display = "none";
      this.nextSkill(); // function invoked here to avoid context changing before vanish
    }, 0);
    clearTimeout(snowflakeTimeoutID);
    snowflakeTimeoutID = setTimeout(() => {
      this.snowflakeFall();
    }, 2000);
  }
  nextSkill() {
    this.setState({
      showingSkillID: (this.state.showingSkillID + 1) % DATA.skill.length
    });
  }
  componentDidMount() {
    this.snowFall(); // radius 20-50px, 5 balls/0.7s
    this.bigSnowball(); // radius 100-300px, 4-9s a ball
    this.snowflakeFall();
  }
  render() {
    return (
      <div id="WA" className="shadow">
        <div id="WA-container">
          <div id="WA-BG" />
          <Snowflake type={1} /> {/* clip path for skill */}
          <Snowflake type={2} /> {/* clip path for shade */}
          <div
            id="WA-snowflake"
            style={{
              cursor: this.state.snowflakeFalling ? "pointer" : "default"
            }}
            onMouseOver={this.hoverSnowflake.bind(this)}
            onMouseLeave={this.leaveSnowflake.bind(this)}
            onClick={this.focusSnowflake.bind(this)}
          >
            <Snowflake type={0} height="80" />
          </div>
          <div id="WA-skill" className="untouchable">
            <div id="WA-skill-leave" onClick={this.blurSnowflake.bind(this)}>
              <div>&times;</div>
            </div>
            <br />
            <br />
            MY SKILL SET
            <div id="WA-skill-name">
              {DATA.skill[this.state.showingSkillID].name}
            </div>
            Skill Level:
            <br />
            {DATA.skill[this.state.showingSkillID].level}
            <br />
            <br />
            <div id="WA-skill-next" onClick={this.nextSkill.bind(this)}>
              <div>next</div>
            </div>
          </div>
          <div id="WA-skillImg" className="untouchable">
            <img
              height="350px"
              src={DATA.skill[this.state.showingSkillID].img}
            />
            <div id="WA-skillImg-filter" />
            <div id="WA-skillImg-shade" />
          </div>
        </div>
        <div id="WA-skill-notice" className="shadow untouchable">
          Click the snowflake!
        </div>
      </div>
    );
  }
}

export default WhiteAlbum;
