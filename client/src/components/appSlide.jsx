import React from "react";
import DATA from "../data/data.jsx";

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
    this.handleButton = this.handleButton.bind(this);
  }
  slide(sign) {
    var n = sign;
    if (sign === undefined) n = (this.state.focus + 1) % DATA.app.length;
    this.setState({ focus: n });
    introTimeoutID = setTimeout(
      () => this.props.setIndexState({ appNum: n }),
      ANIME_DURATION
    );
  }
  // automatic slide when not hover
  rollSlide() {
    clearTimeout(rollTimeoutID);
    rollTimeoutID = setTimeout(() => {
      this.slide();
      this.rollSlide();
    }, 3000);
  }
  // controll the animation of both in & out, boolean value indicates out or not
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
  handleButton(e) {
    if (typeof e === "object") var n = Number(e.target.getAttribute("name"));
    else if (e === "+") var n = (this.state.focus + 1) % DATA.app.length;
    else var n = (this.state.focus - 1 + DATA.app.length) % DATA.app.length;
    this.slide(n);
    this.introPhaseOut(true);
    clearTimeout(introTimeoutID);
    introTimeoutID = setTimeout(() => {
      if (this.state.mouseOver) this.introPhaseOut(false);
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
          <div id="appslide-content" className="untouchable">
            {DATA.app[this.state.focus].name}
          </div>
          <div
            id="appslide-button-left"
            onClick={() => this.handleButton("-")}
            style={{ display: this.state.mouseOver ? "block" : "none" }}
          >
            <div id="appslide-arrow-left" />
          </div>
          <div
            id="appslide-button-right"
            onClick={() => this.handleButton("+")}
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
              for (var i = 0; i < DATA.app.length; i++)
                if (i === this.state.focus)
                  arr.push(<div className="appslide-focusdot" key={i} />);
                else
                  arr.push(
                    <div
                      className="appslide-unfocusdot"
                      key={i}
                      name={i}
                      onMouseOverCapture={this.handleButton}
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
