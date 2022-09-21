import s from "./Post.module.css";
import React from "react";

class Post extends React.Component {
  render() {
    return (
      <div>
        <div className={s.postItem}>
          <div className={s.postCircle}></div>
          <span>{this.props.message}</span>
        </div>
        <div>
          <span>like {this.props.likesCount}</span>
        </div>
      </div>
    );
  }
}

export default Post;
