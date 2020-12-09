import React from "react";

const Arrow = (props) => (
  <svg
    id="arrow"
    viewBox="-23 -3 46 36"
    fill="transparent"
    stroke="white"
    strokeWidth="3"
    strokeLinecap="round"
    onClick={props.nextView}
  >
    <path id="arrow-stroke1" d="M-20 20L0 30L20 20" />
    <path id="arrow-stroke2" d="M-20 10L0 20L20 10" />
    <path id="arrow-stroke3" d="M-20 0L0 10L20 0" />
  </svg>
);

export default Arrow;
