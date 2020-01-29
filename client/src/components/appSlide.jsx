import React from "react";
import data from "../data/data.jsx";

const ANIME_DURATION = 500;
var rollTimeoutID, introTimeoutID;

class AppSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 0,
      mouseOver: false
    };
    this.slide = this.slide.bind(this);
    this.rollSlide = this.rollSlide.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
    this.handleDot = this.handleDot.bind(this);
  }
  slide(sign) {
    // console.log(sign);
    var n = sign;
    if (sign === "+") n = (this.state.focus + 1) % data.app.length;
    else if (sign === "-")
      n = (this.state.focus - 1 + data.app.length) % data.app.length;
    this.setState({ focus: n });
  }
  rollSlide() {
    clearTimeout(rollTimeoutID);
    rollTimeoutID = setTimeout(() => {
      this.slide("+");
      this.rollSlide();
    }, 5000);
  }
  introPhaseOut(bool) {
    if (bool)
      document
        .getElementById("namecard-app-intro")
        .classList.remove("namecard-app-intro-anime");
    else
      document
        .getElementById("namecard-app-intro")
        .classList.add("namecard-app-intro-anime");
  }
  mouseOff(bool) {
    if (bool) this.rollSlide();
    else clearTimeout(rollTimeoutID);
    this.introPhaseOut(bool);
    this.setState({ mouseOver: !bool });
  }
  handleDot(e) {
    var n = Number(e.target.getAttribute("name"));
    this.slide(n);
    this.introPhaseOut(true);
    clearTimeout(introTimeoutID);
    introTimeoutID = setTimeout(() => {
      this.introPhaseOut(false);
      this.props.setIndexState({ appNum: n });
    }, ANIME_DURATION);
  }
  componentDidMount() {
    this.rollSlide();
  }
  render() {
    return (
      <div
        id="appslide"
        className="shadow"
        onMouseOverCapture={() => this.mouseOff(false)}
        onMouseLeave={() => this.mouseOff(true)}
      >
        <div id="appslide-container">
          <div
            id="appslide-button-left"
            onClick={() => this.slide("-")}
            style={{ display: this.state.mouseOver ? "block" : "none" }}
          >
            <div id="appslide-arrow-left" />
          </div>
          <div
            id="appslide-button-right"
            onClick={() => this.slide("+")}
            style={{ display: this.state.mouseOver ? "block" : "none" }}
          >
            <div id="appslide-arrow-right" />
          </div>
          <div
            id="appslide-dots"
            style={{ display: this.state.mouseOver ? "inline-block" : "none" }}
          >
            {(() => {
              var arr = [];
              for (var i = 0; i < data.app.length; i++)
                if (i === this.state.focus)
                  arr.push(<div className="appslide-focusdot" key={i} />);
                else
                  arr.push(
                    <div
                      className="appslide-unfocusdot"
                      key={i}
                      name={i}
                      onMouseOverCapture={this.handleDot}
                    />
                  );
              return arr;
            })()}
          </div>
        </div>
      </div>
    );
  }
}
export default AppSlide;
