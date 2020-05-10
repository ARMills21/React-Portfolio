import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alex Mills</h2>
            <img
              src="./images/universal.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                lineHeight: "2em",
              }}
            >
              New full stack web developer. Some experience coding in html, css, react, mysql. 
            </p>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                lineHeight: "2em",
              }}
            >
              Graduated the bootcamp at KU through Trilogy. 
            </p>
            
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (816) 214-2746
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    alex@kcbas.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;