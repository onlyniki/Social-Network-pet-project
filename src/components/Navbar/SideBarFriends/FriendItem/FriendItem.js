import React from "react";
import s from "./FriendItem.module.css";

class FriendItem extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.circle}></div>
        <div>{this.props.friendInfo.name}</div>
      </div>
    );
  }
}

export default FriendItem;
