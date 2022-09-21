import React from "react";
import s from "./Message.module.css";

class Message extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className={s.circle}></div>
        <span className={s.text}>{this.props.text}</span>
      </div>
    );
  }
}

export default Message;
