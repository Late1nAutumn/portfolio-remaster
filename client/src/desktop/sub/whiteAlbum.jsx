import React from "react";

class WhiteAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.smallTimeout = false;
    this.bigTimeout = false;
  }
  snowballFall(sizeP, startP, durationP, xP, dxP) {
    var size = sizeP || Math.floor(Math.random() * 20) + 40; // px
    var start = startP || Math.floor(Math.random() * 2000); // ms
    var duration = durationP || Math.floor(Math.random() * 4000) + 5000; // ms
    var x = xP || Math.random() * 94 + 1; // %
    var dx = dxP || Math.random() * 6 - 2.5; // %

    var snowball = document.createElement("div");
    snowball = document.getElementById("contact-WA").appendChild(snowball);
    snowball.className = "contact-hikari";
    Object.assign(snowball.style, {
      width: size + "px",
      height: size + "px",
      left: x + "%",
      top: "100%",
      transition: duration + "ms",
      transitionTimingFunction: "linear",
    });
    setTimeout(() => {
      Object.assign(snowball.style, {
        top: 0 - size * 2 + "px", //
        left: x + dx + "%",
      });
    }, start);
    setTimeout(() => snowball.remove(), start + duration + 10);
  }
  bigSnowball() {
    var size = Math.floor(Math.random() * 200) + 150;
    this.snowballFall(size, 500, 4000);
    var nextTime = Math.floor(Math.random() * 7000) + 8000;
    this.bigTimeout = setTimeout(() => this.bigSnowball(), nextTime);
  }
  snowFall() {
    this.smallTimeout = setInterval(() => this.snowballFall(), 1200);
  }
  componentDidMount() {
    this.snowFall();
    this.bigSnowball();
  }
  componentDidUpdate() {
    // Switch WA off when not viewed
    if (!this.props.run && this.smallTimeout) {
      clearTimeout(this.bigTimeout);
      clearInterval(this.smallTimeout);
      this.smallTimeout = false;
      this.bigTimeout = false;
    } else if (!this.smallTimeout && this.props.run) {
      this.snowFall();
      this.bigSnowball();
    }
  }
  render() {
    return <div id="contact-WA" />;
  }
}

export default WhiteAlbum;
