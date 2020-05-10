import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="./images/Alex_Chiefs.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/alex-mills-7a998b196/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/ARMills21"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;