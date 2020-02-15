import React from "react";

import Svg from "./svgs.jsx";

const BGDecoration = () => (
  <div>
    <div id="BG-hexs">
      <div id="BG-hexs-container">
        <div id="BG-hex-1" className="BG-hex">
          <Svg
            name="hexagon"
            stroke="#0073b1"
            fillOpacity="0"
            strokeOpacity="0.5"
            height="250"
          />
        </div>
        <div id="BG-hex-2" className="BG-hex">
          <Svg
            name="hexagon"
            stroke="#0073b1"
            fillOpacity="0"
            strokeOpacity="0.5"
            height="200"
          />
        </div>
        <div id="BG-hex-3" className="BG-hex">
          <Svg name="hexagon" fill="#283e4a" height="100" fillOpacity="0.5" />
        </div>
      </div>
    </div>
  </div>
);

export default BGDecoration;
