import React from "react";

import Portrait from "./sub/portrait";
import Greet from "./sub/cover_greet";
import Chat from "./sub/cover_chat";
import Arrow from "./sub/arrow";

const { computeEyeCoordinate, forceMaxSize } = require("./operators");

const { INTRO } = require("./data/cover_data");

// TODO: don't start anime when not looking at window

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeTrack: false, // important
      greet: false,
      showPhoto: "0", // opacity
      showIntro: false,
      showArrow: false,
      lEyeX: 201,
      lEyeY: 376,
      rEyeX: 403,
      rEyeY: 373,
    };
    this.COOLDOWN = 0;
    this.flashQueue = []; // {id, timeout, val}
    this.flashId = 0;

    this.updateEye = this.updateEye.bind(this);
    this.flashPhoto = this.flashPhoto.bind(this);
    this.flashDequeue = this.flashDequeue.bind(this);
  }
  updateEye(e) {
    if (!this.state.eyeTrack || !this.props.actView) return;
    var time = new Date().getTime();
    if (time - this.COOLDOWN < 50) return; // prevent fps drop
    this.COOLDOWN = time;
    this.setState(computeEyeCoordinate(e.clientX, e.clientY));
  }
  flashPhoto(mode) {
    var push = (val, timeout) => {
      this.flashQueue.push({ id: this.flashId, timeout, val });
      this.flashId++;
    };
    var temp = this.flashId;
    switch (mode) {
      case -1:
        this.setState({ showPhoto: "0" });
        return;
      case 0:
        push("0.2", 0);
        push("0", 100);
        push("0.2", 150);
        push("0", 400);
        push("1", 200);
        break;
      case 1:
        this.setState({ showPhoto: "1" });
        return;
    }
    this.flashDequeue(temp);
  }
  flashDequeue(id) {
    if (this.flashQueue[0].id === id) {
      this.setState({ showPhoto: this.flashQueue[0].val });
      this.flashQueue.shift();
    }
    if (this.flashQueue[0])
      setTimeout(() => {
        this.flashDequeue(this.flashQueue[0].id);
      }, this.flashQueue[0].timeout);
  }
  componentDidMount() {
    if (this.props.progressed) this.setState({ eyeTrack: true });
    else
      setTimeout(() => {
        console.log("canvas update complete");
        this.setState({ eyeTrack: true });
        setTimeout(() => this.setState({ greet: true }), 1500);
      }, 7500);
  }
  render() {
    return (
      <div id="cover" onMouseMove={this.updateEye}>
        <div id="cover-waves">
          <div id="cover-wave1-vert" className="cover-wave-vert">
            <div
              id="cover-wave1-hori"
              className={
                "cover-wave-hori " +
                (this.props.actView ? "cover-wave-hori-anime" : "")
              }
            />
          </div>
          <div id="cover-wave2-vert" className="cover-wave-vert">
            <div
              id="cover-wave2-hori"
              className={
                "cover-wave-hori " +
                (this.props.actView ? "cover-wave-hori-anime" : "")
              }
            />
          </div>
          <div id="cover-wave3-vert" className="cover-wave-vert">
            <div
              id="cover-wave3-hori"
              className={
                "cover-wave-hori " +
                (this.props.actView ? "cover-wave-hori-anime" : "")
              }
            />
          </div>
        </div>
        <div id="cover-content">
          <div className="cover-wrap">
            <div
              id="cover-portrait"
              style={{
                opacity:
                  this.state.showPhoto === "0" || this.props.progressed
                    ? "1"
                    : "0",
              }}
            >
              <Portrait
                eyeTrack={this.state.eyeTrack || this.props.progressed}
                lEyeX={this.state.lEyeX}
                lEyeY={this.state.lEyeY}
                rEyeX={this.state.rEyeX}
                rEyeY={this.state.rEyeY}
              />
            </div>
          </div>
          {this.props.progressed ? null : (
            <div className="cover-wrap">
              <table id="cover-imgHolder">
                <tbody>
                  <tr>
                    <td>
                      <img
                        id="cover-photo"
                        className="untouchable"
                        src="../asset/portrait.jpg"
                        style={forceMaxSize(this.props.safari, {
                          opacity: this.state.showPhoto,
                        })}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {this.state.greet ? (
            <Greet
              time={this.props.time}
              flashPhoto={this.flashPhoto}
              setCoverState={this.setState.bind(this)}
              wheelRoll={this.props.wheelRoll}
              keyNavi={this.props.keyNavi}
              touchNavi={this.props.touchNavi}
            />
          ) : null}
          {this.props.progressed ? <Chat actView={this.props.actView} /> : null}
          {this.props.progressed ? null : (
            <div
              id="cover-intro"
              className={this.state.showIntro ? "" : "cover-hiddenBox"}
            >
              {INTRO}
            </div>
          )}
          {this.state.showArrow && !this.props.progressed ? (
            <Arrow nextView={this.props.nextView} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Cover;
