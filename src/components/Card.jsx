import React, { Component } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className={classes.github_profile}>
        <img src={profile.avatar_url} alt='img' />
        <div className={classes.info}>
          <div className={classes.name}>{profile.name}</div>
          <div className={classes.company}>{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
