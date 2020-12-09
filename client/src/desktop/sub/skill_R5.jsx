import React from "react";

var Ring5 = ({ hide, img, text, vh, vw, i, actView, SkillCog }) => (
  <div
    className="skill-skillContainer"
    style={
      hide
        ? {
            top:
              0.5 * vh +
              0.2 * Math.sin(((0.5 + i) / 4) * Math.PI) * Math.min(vh, vw) +
              "px",
            left:
              0.5 * vw +
              0.2 * Math.cos(((0.5 + i) / 4) * Math.PI) * Math.min(vh, vw) +
              "px",
            opacity: 0,
          }
        : {
            top:
              0.5 * vh +
              0.3 * Math.sin(((0.5 + i) / 4) * Math.PI) * Math.min(vh, vw) +
              "px",
            left:
              0.5 * vw +
              0.3 * Math.cos(((0.5 + i) / 4) * Math.PI) * Math.min(vh, vw) +
              "px",
            opacity: 1,
          }
    }
  >
    <img
      className="skill-skillImg untouchable"
      src={`../asset/skills/${img}.png`}
    />
    <table className="skill-skillText untouchable">
      <tbody>
        <tr>
          <td>{text}</td>
        </tr>
      </tbody>
    </table>
    <svg height="100%" viewBox={SkillCog.viewBox} fill="lightgrey">
      <path d={SkillCog.path}>
        {actView ? (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={i % 2 ? "0 6400 6400" : "360 6400 6400"}
            to={i % 2 ? "360 6400 6400" : "0 6400 6400"}
            dur="7s"
            repeatCount="indefinite"
          />
        ) : null}
      </path>
    </svg>
  </div>
);

export default Ring5;
