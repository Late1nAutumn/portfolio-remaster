import React from "react";

import WhiteAlbum from "./sub/whiteAlbum";
import { githubIcon, linkedinIcon, emailIcon } from "./data/appList_data";
const { toClipboard } = require("./operators");

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
    };
    this.copyEmail = this.copyEmail.bind(this);
  }
  copyEmail(e) {
    e.preventDefault();
    toClipboard("forestpu@gmail.com", "contact", () => {
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 2500);
    });
  }
  render() {
    return (
      <div id="contact">
        <table className="untouchable">
          <tbody>
            <tr>
              <td>
                <div id="contact-bigT">Do you like me?</div>
                <div className="contact-smallT">
                  As I'm now open for more opportunities,
                </div>
                <div className="contact-smallT">
                  feel free to reach me to know more about me!
                </div>
                <a id="contact-hello" href="mailto:forest@gmail.com">
                  Say Hello!
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="contact-links">
          <a href="" title="Copy to clipboard" onClick={this.copyEmail}>
            <svg viewBox={emailIcon.viewBox}>
              <path d={emailIcon.path} />
            </svg>
            forestpu@gmail.com
          </a>
          <a href="https://github.com/Late1nAutumn" target="_blank">
            <svg viewBox={githubIcon.viewBox}>
              <path d={githubIcon.path} />
            </svg>
            github.com/Late1nAutumn
          </a>
          <a
            href="https://www.linkedin.com/in/conglin-p-95b82614b"
            target="_blank"
          >
            <svg viewBox={linkedinIcon.viewBox}>
              <path d={linkedinIcon.path} />
            </svg>
            linkedin.com/in/conglin-p-95b82614b
          </a>
        </div>
        {this.state.showAlert ? (
          <div id="contact-alert">Email copied to the clipboard!</div>
        ) : null}
        <WhiteAlbum run={this.props.actView} />
      </div>
    );
  }
}

export default Contact;
