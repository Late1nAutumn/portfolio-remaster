import React from "react";

import Ring5 from "./sub/skill_R5";
import Arrow from "./sub/arrow";

import {
  R1icon,
  SkillImgs,
  SkillTexts,
  BGCog,
  SkillCog,
} from "./data/skill_data";

const { initR1 } = require("./operators");

// ring1: icons
// ring2: bg change
// ring3: fading halo
// ring4: portrait mask
// ring5: skills

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      R1cords: [],
      vh: 0,
      vw: 0,
    };
    this.resize = this.resize.bind(this);
  }
  resize() {
    var node = document.getElementById("skill");
    this.setState({
      vh: node.clientHeight,
      vw: node.clientWidth,
      R1cords: initR1(node.clientWidth / 2, node.clientHeight / 2),
    });
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
    document.getElementById("view2").style.backgroundColor =
      this.props.stage > 3 ? "#000060" : "darkgreen";
  }
  render() {
    return (
      <div id="skill">
        {this.props.stage < 1
          ? this.state.R1cords.map(({ x, y }, i) => (
              <svg
                className={
                  "skill-R1icon" +
                  (this.props.stage > -1 ? " skill-R1icon-anime" : "")
                }
                viewBox={R1icon[i].viewBox}
                style={{
                  top: y + "%",
                  left: x + "%",
                  transform: `rotate(${Math.floor(
                    Math.random() * 720 - 360
                  )}deg)`,
                }}
                fillRule="evenodd"
                key={i}
              >
                <path
                  d={R1icon[i].path}
                  fill={this.props.stage ? "transparent" : "white"}
                />
              </svg>
            ))
          : null}
        <img
          id="skill-portrait"
          className="untouchable"
          src="../asset/v2portrait.jpg"
        />
        <svg width="100%" height="100%">
          {this.props.stage > -1 && this.props.stage < 2 ? (
            <circle cx="50%" cy="50%" r="0" fill="#000060">
              <animate
                id="skill-svg-start"
                attributeName="r"
                to={
                  ((this.state.vh / 2) ** 2 + (this.state.vw / 2) ** 2) ** 0.5
                }
                begin="indefinite"
                dur="0.7s"
                fill="freeze"
              />
            </circle>
          ) : null}
          {this.props.stage > -1 && this.props.stage < 3 ? (
            <circle cx="50%" cy="50%" r="0" fill="white">
              <animate
                attributeName="r"
                to={Math.min(this.state.vh, this.state.vw) / 4}
                begin="skill-svg-start.begin + 300ms"
                dur="0.9s"
                fill="freeze"
              />
            </circle>
          ) : null}
          {this.props.stage > -1 && this.props.stage < 3 ? (
            <circle cx="50%" cy="50%" r="0" fill="#000060">
              <animate
                attributeName="r"
                to={Math.min(this.state.vh, this.state.vw) / 4}
                begin="skill-svg-start.begin + 400ms"
                dur="0.8s"
                fill="freeze"
              />
            </circle>
          ) : null}
          <clipPath id="skill-R4">
            {this.props.stage > -1 ? (
              this.props.stage < 4 ? (
                <circle
                  cx={Math.min(this.state.vh, this.state.vw) / 8}
                  cy={Math.min(this.state.vh, this.state.vw) / 8}
                  r="0"
                  fill="black"
                >
                  <animate
                    attributeName="r"
                    values={`0 ; ${
                      Math.min(this.state.vh, this.state.vw) / 9
                    } ; ${Math.min(this.state.vh, this.state.vw) / 8} ; ${
                      Math.min(this.state.vh, this.state.vw) / 10
                    }`}
                    keyTimes="0 ; 0.3 ; 0.5 ; 1"
                    begin="skill-svg-start.begin + 700ms"
                    dur="0.8s"
                    fill="freeze"
                  />
                </circle>
              ) : (
                <circle
                  cx={Math.min(this.state.vh, this.state.vw) / 8}
                  cy={Math.min(this.state.vh, this.state.vw) / 8}
                  r={Math.min(this.state.vh, this.state.vw) / 10}
                  fill="black"
                ></circle>
              )
            ) : null}
          </clipPath>
        </svg>
        {this.props.stage < 3
          ? null
          : SkillImgs.map((img, i) => (
              <Ring5
                hide={this.props.stage < 4}
                img={img}
                text={SkillTexts[i]}
                vh={this.state.vh}
                vw={this.state.vw}
                i={i}
                actView={this.props.actView}
                SkillCog={SkillCog}
                key={i}
              />
            ))}
        <svg height="100%" viewBox={SkillCog.viewBox} fill="lightgrey">
          <clipPath id="skill-R5clip">
            <circle
              cx={Math.min(this.state.vh, this.state.vw) / 10}
              cy={Math.min(this.state.vh, this.state.vw) / 10}
              r={Math.min(this.state.vh, this.state.vw) / 14}
            />
          </clipPath>
        </svg>
        <div id="skill-title" className="untouchable">
          <div id="skill-title0">PART OF MY</div>
          <div id="skill-title1">TECH STACK</div>
        </div>
        <svg
          id="skill-bgcog"
          width={Math.max(this.state.vh, this.state.vw) * 0.4}
          viewBox={BGCog.viewBox}
          fill="#111111"
          fillRule="evenodd"
        >
          <path d={BGCog.path}>
            {this.props.actView ? (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 6400 6400"
                to="360 6400 6400"
                dur="20s"
                repeatCount="indefinite"
              />
            ) : null}
          </path>
        </svg>
        {this.props.stage === 5 && !this.props.progressed ? (
          <Arrow nextView={this.props.nextView} />
        ) : null}
      </div>
    );
  }
}

export default Skill;
