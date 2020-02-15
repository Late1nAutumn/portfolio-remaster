// Todo: use cookies
import React from "react";
import Svg from "./parts/svgs.jsx";

class SettingTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div id="settingtab" className="shadow">
        <Svg name="cog" fill="#c7d1d8" height={80} />
      </div>
    );
  }
}

export default SettingTab;
