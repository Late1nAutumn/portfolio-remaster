import React from "react";

const { getTime } = require("../operators");

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.LINES = [
      "\nMy name is Conglin Pu.\nYou can call me ", // "Forest ."is shown later for color change
      "Welcome to my portfolio.\nI'm glad you want to know about me.\nLet me show you!",
    ];
    this.state = {
      hideBox: true,
      text: "",
      i: 0, // index of LINES
    };
    this.openDialog = this.openDialog.bind(this);
    this.processDialog = this.processDialog.bind(this);
    this.specialText = this.specialText.bind(this);
  }
  openDialog() {
    if (this.state.i === this.LINES.length) {
      console.log("intro animation finished");
      // End
      this.props.flashPhoto(0);
      setTimeout(() => {
        this.props.setCoverState({ showIntro: true, greet: false });
        window.onmousewheel = this.props.wheelRoll;
        window.addEventListener("keydown", this.props.keyNavi);
        window.addEventListener("touchmove", this.props.touchNavi);
      }, 2000);
      setTimeout(() => this.props.setCoverState({ showArrow: true }), 6000);
    } else {
      this.setState({ hideBox: false });
      setTimeout(this.processDialog, 400);
    }
  }
  processDialog() {
    var j = this.state.text.length;
    if (this.state.i === 0 && j === this.LINES[0].length) this.specialText();
    else if (j === this.LINES[this.state.i].length)
      setTimeout(() => {
        this.setState({ hideBox: true, text: "", i: this.state.i + 1 }, () => {
          setTimeout(this.openDialog, 400);
        });
      }, 3000);
    else {
      this.setState({ text: this.state.text + this.LINES[this.state.i][j] });
      setTimeout(this.processDialog, 25);
    }
  }
  specialText(prefix = this.state.text, surfix = "") {
    const name = "Forest";
    if (surfix.length < 6) {
      var temp = surfix + name[surfix.length];
      this.setState({
        text: prefix + `<span style="color:forestgreen">${temp}</span>`,
      });
      setTimeout(() => this.specialText(prefix, temp), 25);
    } else {
      this.setState({ text: this.state.text + "." });
      setTimeout(() => {
        this.setState({ hideBox: true, text: "", i: this.state.i + 1 }, () => {
          setTimeout(this.openDialog, 400);
        });
      }, 3000);
    }
  }
  componentDidMount() {
    var time = getTime(); // 0,1,2,3 => morning,afternoon,evening,midnight
    switch (time) {
      case 0:
        this.LINES[0] = "Good morning!" + this.LINES[0];
        break;
      case 1:
        this.LINES[0] = "Good afternoon!" + this.LINES[0];
        break;
      case 2:
        this.LINES[0] = "Good evening!" + this.LINES[0];
        break;
      case 3:
        this.LINES[0] = "Good evening! Don't stay up too late!" + this.LINES[0];
        break;
    }
    setTimeout(this.openDialog, 10);
  }
  render() {
    return (
      <div
        id="cover-greet"
        className={this.state.hideBox ? "cover-hiddenBox" : ""}
      >
        <table>
          <tbody>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: this.state.text }} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Greet;
