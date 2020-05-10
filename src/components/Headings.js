import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Headings extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <h4 style={{ marginTop: "0px" }}>{this.props.heading}</h4>
          <p>{this.props.value}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Headings;