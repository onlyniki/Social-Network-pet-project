import s from "./PostingArea.module.css";
import React from "react";

class PostingArea extends React.Component {
  constructor(props) {
    super(props);
    this.firstRef = React.createRef();
    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }
  render() {
    return (
      <div>
        <h2>My posts</h2>
        <div className={s.textareaCont}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="your news..."
            value={this.props.newPostText}
            ref={this.firstRef}
            onChange={this.handlerOnChange}
          ></textarea>
          <button onClick={this.handlerOnClick}>post</button>
        </div>
      </div>
    );
  }

  handlerOnChange(e) {
    this.props.upDatePostText(this.firstRef.current.value);
  }
  handlerOnClick(e) {
    this.props.addNewPost();
  }
}

export default PostingArea;
