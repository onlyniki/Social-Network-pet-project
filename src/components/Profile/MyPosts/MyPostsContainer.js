import React from "react";
import {
  createAddPostAction,
  createNewPostTextAction,
} from "../../../Redux/profileReducer";

import MyPosts from "./MyPosts";

class MyPostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.upDatePostText = this.upDatePostText.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }
  render() {
    return (
      <MyPosts
        profileState={this.props.profileState}
        upDatePostText={this.upDatePostText}
        addNewPost={this.addNewPost}
      />
    );
  }

  upDatePostText(currentText) {
    const action = createNewPostTextAction(currentText);
    this.props.dispatch(action);
  }

  addNewPost() {
    const action = createAddPostAction();
    this.props.dispatch(action);
  }
}

export default MyPostsContainer;
