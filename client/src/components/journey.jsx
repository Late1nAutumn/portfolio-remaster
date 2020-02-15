import React from "react";
import Data from "./parts/data.jsx";
import Svg from "./parts/svgs.jsx";

class Journey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="modal">
        <div id="journeys">
          {/* <svg> mask*/}
          <svg width="1000" height="900" viewBox="0 0 1000 900">
            <path stroke="white" strokeWidth="6" d="M638 -1V750z" />
          </svg>
          {Data.journey.map(obj => (
            <div className="journey-container">
              <div className="journey-wrap">
                <div className="journey-event">{obj.event}</div>
              </div>
              <div className="journey-arrow" />
              <div className="journey-time">{obj.time}</div>
              <svg height="20" width="20" viewBox="-10 -10 20 20">
                <circle fill="blue" stroke="white" strokeWidth="4" cx="0" cy="0" r="6"/>
              </svg>
            </div>
          ))}
          <div id="journey-end">Life goes on</div>
        </div>
      </div>
    );
  }
}

export default Journey;
