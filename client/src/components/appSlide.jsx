import React from "react";
import data from "../data/data.jsx";

class AppSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus:0
    };
  }
  render() {
    return (
      <div id="appslide" className="shadow">
        <div id="appslide-container">
          <div id="appslide-button-left"></div>
          <div id="appslide-button-right"></div>
          <div id="appslide-dots">{
            (()=>{
              var arr=[];
              for(var i=0;i<data.app.length;i++)
                if(i===this.state.focus)
                  arr.push(<div className="focusdot"/>);
                else
                  arr.push(<div className="unfocusdot"/>);
              return arr;
            })()
          }</div>
        </div>
      </div>
    );
  }
}
export default AppSlide;
