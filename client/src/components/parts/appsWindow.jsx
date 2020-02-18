import React from "react";

import DATA from "./data.jsx";

var AppsWindow = ({ appID }) => {
  if (appID === 0)
    //SDC
    return (
      <div id="apps-window">
        <span id="apps-window-helper" />
        <img src="https://fortissimo.s3-us-west-1.amazonaws.com/porthub/sdc-window.jpg" />
        <div id="apps-window-name" className="untouchable">
          {DATA.app[appID].name}
        </div>
      </div>
    );
  if (appID === 1)
    //UNO
    return (
      <div id="apps-window">
        <div id="apps-window-video">
          <div
            id="apps-video-name"
            style={{
              right:
                320 -
                document.getElementById("apps-window").clientWidth / 2 +
                "px"
            }}
            className="untouchable"
          >
            {DATA.app[appID].name}
          </div>
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/QvYIdHo0m5Q"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    );
  if (appID === 2)
    //MVP
    return (
      <div id="apps-window">
        <span id="apps-window-helper" />
        <img src="https://fortissimo.s3-us-west-1.amazonaws.com/porthub/mvp-window.jpg" />
        <div id="apps-window-name" className="untouchable">
          {DATA.app[appID].name}
        </div>
      </div>
    );
};

export default AppsWindow;
