import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.profiles.map((profile) => (
          <Card key={profile.id} {...profile} />
        ))}
      </React.Fragment>
    );
  }
}

export default CardList;
