// This file is not been used

import React from "react";

import { githubIcon, linkIcon, youtubeIcon } from "../data/appList_data";

var AppDetail = ({ appID }) => {
  if (appID === 0)
    //SDC
    return (
      <div>
        <a
          title="open the repo"
          href="https://github.com/RealExpensiveItems/Forest-SDC_Lite"
          target="_blank"
        >
          <svg className="applist-svg" viewBox={githubIcon.viewBox}>
            <path d={githubIcon.path} />
          </svg>
          Repo
        </a>
        <div id="applist-detail">
        </div>
      </div>
    );
  if (appID === 1)
    //UNO
    return (
      <div>
        <a
          title="open the repo"
          href="https://github.com/Late1nAutumn/herokuma"
          target="_blank"
        >
          <svg className="applist-svg" viewBox={githubIcon.viewBox}>
            <path d={githubIcon.path} />
          </svg>
          Repo
        </a>
        <a
          title="open the app"
          href="https://lateinautumn.herokuapp.com/"
          target="_blank"
        >
          <svg className="applist-svg" viewBox={linkIcon.viewBox}>
            <path d={linkIcon.path} />
          </svg>
          Link
        </a>
        <a
          title="watch intro video"
          href="https://www.youtube.com/embed/QvYIdHo0m5Q"
          target="_blank"
        >
          <svg className="applist-svg" viewBox={youtubeIcon.viewBox}>
            <path d={youtubeIcon.path} />
          </svg>
          Video
        </a>
        <div id="applist-detail">
        </div>
      </div>
    );
  if (appID === 2)
    //MVP
    return (
      <div id="applist-detail">
      </div>
    );
};

export default AppDetail;
