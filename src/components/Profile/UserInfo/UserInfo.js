import s from "./UserInfo.module.css";
import React from "react";
import UserAvatar from "./UserAvatar/UserAvatar";
import UserInfoText from "./UserInfoText/UserInfoText";

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <div className={s.userInfoCont}>
          <UserAvatar />
          <UserInfoText />
        </div>
      </div>
    );
  }
}

export default UserInfo;
