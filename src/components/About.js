import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Headings from "./Headings";

class Resume extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Grid>
          <Cell className="resume-right-col" col={12}>
            <h2>About</h2>

            <Headings
              heading="PROGRAMMING LANGUAGES, FRAMEWORKS, LIBRARIES"
              value="HTML5, CSS3, JavaScript, Bootstrap, jQuery, Ajax, MySQL, Node.js, Express, React"
            />

            <Headings
              heading="GITHUB PROFILE:"
              value={
                <a
                  href="https://github.com/ARMills21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/ARMills21
                </a>
              }
            />

            <Headings
              heading="LINKEDIN:"
              value={
                <a
                  href="https://www.linkedin.com/in/alex-mills-7a998b196/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/alex-mills-7a998b196/
                </a>
              }
            />
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;