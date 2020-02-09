// Todo: use cookies
import React from "react";
import Svg from "../data/svgs.jsx";

class SettingTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div id="settingtab" className="shadow">
        <Svg name="cog" fill="#283e4a" height={80} />
      </div>
    );
  }
}

export default SettingTab;
