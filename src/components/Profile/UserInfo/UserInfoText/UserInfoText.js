import s from "./UserInfoText.module.css";
import React from "react";

class UserInfoText extends React.Component {
  render() {
    return (
      <div className={s.userInfoSmllCont}>
        <h2 className={s.userInfoName}>Borisevich Nikita</h2>
        <ul className={s.userInfoList}>
          <li>City: Minsk</li>
          <li>Education: BNTU</li>
          <li>WebSite: it-kamasutra</li>
        </ul>
      </div>
    );
  }
}

export default UserInfoText;
