import React from "react";

import Arrow from "./sub/arrow";

import DATA from "./data/journey_data";

class Journey extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div id="journey">
        <div id="journey-title" className="untouchable">
          My Journey
        </div>
        <div
          id="journey-stem"
          style={this.props.stage ? { height: "67%" } : {}}
        />
        {DATA.map((journey, i) => (
          <div key={i}>
            <div
              className="journey-container"
              style={{
                top: 20 + i * 10 + "%",
                WebkitClipPath: `url(#journey-clipPath${i})`,
                clipPath: `url(#journey-clipPath${i})`,
              }}
            >
              <div className="journey-icons">
                <svg height="40px" fill="darkgreen" viewBox={journey.viewBox}>
                  {journey.paths.map((path, i) => (
                    <path d={path} key={i} />
                  ))}
                </svg>
              </div>
              <div className={"journey-" + (i % 2 ? "left" : "right")}>
                {journey.event}
              </div>
              <div
                className={"journey-time journey-" + (i % 2 ? "right" : "left")}
              >
                {journey.time}
              </div>
            </div>
            <svg
              className="journey-clipPaths"
              style={{ top: 20 + i * 10 + "%" }}
              preserveAspectRatio="none"
            >
              {this.props.stage ? null : (
                <clipPath id={"journey-clipPath" + i}>
                  <rect x="50%" y="0" width="0" height="100%" fill="white">
                    <animate
                      id={`journey-clipPath${i}-a0`}
                      attributeName="width"
                      to="100%"
                      dur="2s"
                      begin={`journey-clipPath${i - 1}-a0.begin + 250ms`}
                      fill="freeze"
                    />
                    <animate
                      id={`journey-clipPath${i}-a1`}
                      attributeName="x"
                      to="0"
                      dur="2s"
                      begin={`journey-clipPath${i}-a0.begin + 0ms`}
                      fill="freeze"
                    />
                  </rect>
                </clipPath>
              )}
            </svg>
          </div>
        ))}
        <div id="journey-end" style={this.props.stage ? { opacity: 1 } : {}}>
          Life goes on
        </div>
        {this.props.stage === 1 && !this.props.progressed ? (
          <Arrow nextView={this.props.nextView} />
        ) : null}
      </div>
    );
  }
}

export default Journey;
