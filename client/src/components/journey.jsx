import React from "react";
import Data from "./parts/data.jsx";

// function computeAnimeTime(){
// // 2s / 840px * ( 85px{padding} + 13px{dot margin & radius} +0 (+70px) (+70px) (+92px) (+114px) (+70px) (+92px) (+70px) (+70px))
//   const pxs=[0,70,70,92,114,70,92,70,70];
//   var res=[];
//   var sum=0;
//   for(var i of pxs){
//     sum+=i;
//     res.push(Math.round(2000/840*(85+13+sum))-150); // 150 is the adjust value
//   }
//   return res;
// }
const ANIME_START_TIME = [83, 250, 417, 636, 907, 1074, 1293, 1460, 1626];

class Journey extends React.Component {
  constructor(props) {
    super(props);
  }
  countMaskHeight(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) if (str[i] === "\n") count++;
    return count * 22 + 42;
  }
  render() {
    return (
      <div
        className="modal"
        style={{
          opacity: this.props.displayJourney ? "1" : "0",
          zIndex: this.props.displayJourney ? "4" : "-1"
        }}
      >
        <div id="journeys" className="untouchable">
          <div className="journeys-mask">
            <svg width="1000" height="900" viewBox="0 0 1000 900">
              <clipPath id="journeys-branch-mask">
                <rect fill="white" x="320" y="-1" width="360" height="0">
                  <animate
                    attributeName="height"
                    begin="indefinite"
                    to="840"
                    dur="2s"
                    fill="freeze"
                    id="journeys-branch-mask-anime"
                  />
                </rect>
              </clipPath>
            </svg>
          </div>
          <div id="journeys-branch">
            <svg width="1000" height="900" viewBox="0 0 1000 900">
              <path stroke="white" strokeWidth="6" d="M638 -1V830z" />
            </svg>
            <div id="journey-end">Life goes on</div>
          </div>
          {Data.journey.map((obj, i, arr) => (
            <div className="journey-container" key={i}>
              <div id={"journey-masked" + i}>
                <div className="journey-wrap">
                  <div className="journey-event">{obj.event}</div>
                </div>
                <div className="journey-arrow" />
                <div className="journey-time">{obj.time}</div>
                <div className="journey-dot">
                  <svg height="20" width="20" viewBox="-10 -10 20 20">
                    <circle
                      fill="blue"
                      stroke="white"
                      strokeWidth="4"
                      cx="0"
                      cy="0"
                      r="6"
                    />
                  </svg>
                </div>
              </div>
              <div className="journey-mask">
                <svg width="1000" height="900" viewBox="0 0 1000 900">
                  <clipPath id={"journey-mask" + i}>
                    <rect
                      x="638"
                      y={
                        i === 0
                          ? 0
                          : this.countMaskHeight(arr[i - 1].event) + 28
                      }
                      width="0"
                      height={this.countMaskHeight(obj.event)}
                    >
                      <animate
                        attributeName="width"
                        begin={`journeys-branch-mask-anime.begin + ${ANIME_START_TIME[i]}ms`}
                        to="1000"
                        dur="2s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="x"
                        begin={`journeys-branch-mask-anime.begin + ${ANIME_START_TIME[i]}ms`}
                        to="0"
                        dur="2s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="width"
                        begin={`journeys-branch-mask-anime.begin + 1ms`}
                        to="0"
                        dur="1ms"
                        fill="freeze"
                      />
                      <animate
                        attributeName="x"
                        begin={`journeys-branch-mask-anime.begin + 1ms`}
                        to="638"
                        dur="1ms"
                        fill="freeze"
                      />
                    </rect>
                  </clipPath>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Journey;
