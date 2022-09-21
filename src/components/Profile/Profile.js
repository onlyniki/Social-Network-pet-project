import s from "./Profile.module.css";
import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import UserMainImg from "./UserMainImg/UserMainImg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

class Profile extends React.Component {
  render() {
    return (
      <div className={s.content}>
        <UserMainImg />
        <UserInfo />
        <MyPostsContainer
          profileState={this.props.profileState}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

export default Profile;
