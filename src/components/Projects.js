import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/i2EiXcT.jpg) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Car Project</h4>
                  An application that helps you choose a car. 
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ARMills21/CarProject"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://armills21.github.io/CarProject/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/3ryNLMB.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>About Me</h4>
                 My first prework about me. The very first thing I ever made!
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ARMills21/prework-about-me"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://armills21.github.io/prework-about-me/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/nxDjYXe.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Day Planner</h4>
                  A simple calendar application that allows
                  the user to save events for each hour of the day.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ARMills21/DayPlanner"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://armills21.github.io/DayPlanner/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>

          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/6WILS0f.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Note Taker</h4>
                  A web app for taking notes.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ARMills21/HW11"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}></Cell>
            <Cell col={4}></Cell>
          </Grid>
        </div>
      );
    };
}};

  render() ;{
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Front End</Tab>
          <Tab>Front End & Back End</Tab>
          <Tab>CLI</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  };


export default Projects;