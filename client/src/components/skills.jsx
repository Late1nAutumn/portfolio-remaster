import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  snowballFall(size, start, duration, x, dx) {
    // px, ms, ms, px, px
    var snowball = document.createElement("div");
    snowball = document
      .getElementById("skills-container")
      .appendChild(snowball);
    snowball.className = "snowball";
    Object.assign(snowball.style, {
      transition: duration / 1000 + "s",
      transitionTimingFunction: "linear",
      left: x + "px",
      width: size + "px",
      height: size + "px"
    });
    setTimeout(() => {
      Object.assign(snowball.style, {
        top: "400px",
        left: x + dx + "px"
      });
    }, start);
    setTimeout(() => {
      document.getElementById("skills-container").removeChild(snowball);
    }, start + duration + 200);
  }
  snowFall(){
    setInterval(() => {
      for (var i = 0; i < 5; i++) {
        var size = Math.floor(Math.random() * 30 + 20);
        var start = Math.floor(Math.random() * 1000);
        var duration = Math.floor(Math.random() * 1500 + 3500);
        var x = Math.floor(Math.random() * 1000);
        var dx = Math.floor(Math.random() * 60 - 15);
        this.snowballFall(size, start, duration, x, dx);
      }
    }, 700);
  }
  componentDidMount() {
    this.snowFall();
  }
  render() {
    return (
      <div id="skills" className="shadow">
        <div id="skills-container">
          <div id="skills-BG" />
        </div>
      </div>
    );
  }
}

export default Skills;
