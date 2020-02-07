import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div id="footer">
          <div id="footer-content">
              github<br/>
              linkedin<br/>
              tel<br/>
              email<br/>
          </div>
      </div>
    );
  }
}

export default Footer;