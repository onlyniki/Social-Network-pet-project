import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import s from "./SideBarFriends.module.css";

class SideBarFriends extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <div className={s.contFriends}>
          {this.props.state.map(item => {
            return <FriendItem key={item.id} friendInfo={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default SideBarFriends;
