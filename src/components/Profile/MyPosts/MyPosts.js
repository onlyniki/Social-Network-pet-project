import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import PostingArea from "./PostingArea/PostingArea";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.postsData = this.props.profileState.postsData;
  }
  render() {
    return (
      <div className={s.container}>
        <PostingArea
          newPostText={this.props.profileState.newPostText}
          upDatePostText={this.props.upDatePostText}
          addNewPost={this.props.addNewPost}
        />
        <div className={s.postsMainCont}>
          {this.postsData.map(item => (
            <Post
              key={item.id + "key"}
              message={item.postText}
              likesCount={item.likes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
