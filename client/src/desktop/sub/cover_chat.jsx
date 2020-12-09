import React from "react";

const DATA = require("../data/chat_data");

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.LINES = [];
    this.speakCount = 0;
    this.lastTopic = -1;
    this.timeOut;
    this.state = {
      hideBox: true,
      text: "",
      i: 0, // index of LINES
    };
    this.pickTopic = this.pickTopic.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.processDialog = this.processDialog.bind(this);
  }
  pickTopic() {
    var collection = this.speakCount ? DATA.random : DATA.first;
    // Avoid same phrase choosed continously, not working on 1-element list
    do {
      var temp = Math.floor(Math.random() * collection.length);
    } while (temp === this.lastTopic);
    this.lastTopic = temp;
    this.LINES = collection[temp];
    this.openDialog();
  }
  openDialog() {
    if (this.state.i === this.LINES.length) {
      // current dialog end
      this.setState({ i: 0 });
      this.timeOut = setTimeout(() => {
        this.speakCount++;
        this.pickTopic();
      }, 1500);
    } else {
      this.setState({ hideBox: false });
      this.timeOut = setTimeout(this.processDialog, 400);
    }
  }
  processDialog() {
    var j = this.state.text.length;
    if (j === this.LINES[this.state.i].length)
      // current phrase end
      this.timeOut = setTimeout(() => {
        this.setState({ hideBox: true, text: "", i: this.state.i + 1 }, () => {
          this.timeOut = setTimeout(this.openDialog, 400);
        });
      }, 3000);
    else {
      //show next char
      this.setState({ text: this.state.text + this.LINES[this.state.i][j] });
      this.timeOut = setTimeout(this.processDialog, 25);
    }
  }
  componentDidMount() {
    if (this.props.actView) this.timeOut = setTimeout(this.pickTopic, 1000);
  }
  componentDidUpdate({ actView }) {
    if (!actView && this.props.actView) {
      this.speakCount = 0;
      this.timeOut = setTimeout(this.pickTopic, 1000);
    } else if (actView && !this.props.actView) {
      clearTimeout(this.timeOut);
      this.setState({ hideBox: true, text: "", i: 0 });
    }
  }
  render() {
    return (
      <div
        id="cover-chat"
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

export default Chat;
