import React from "react";

import LinkItem from "../Navbar/LinkItem/LinkItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

class Dialogs extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.dataUsers;
    this.messages = this.props.messages;
    this.textareaRef = React.createRef();
    this.handlerOnClick = this.handlerOnClick.bind(this);
    this.handlerOnChange = this.handlerOnChange.bind(this);
  }

  render() {
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {this.data.map(item => {
            return (
              <LinkItem
                key={item.id}
                activeClass={s.active}
                itemClass={s.item}
                linkName={item.name}
                linkRef={item.ref}
              />
            );
          })}
        </div>
        <div className={s.dialogMessages}>
          <div>
            {this.messages.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <Message key={item + i} text={item} class={s.firstUserMes} />
                );
              } else {
                return (
                  <Message key={item + i} text={item} class={s.secondUserMes} />
                );
              }
            })}
          </div>
          <div>
            <textarea
              className={s.textarea}
              cols="100"
              rows="5"
              placeholder="message"
              ref={this.textareaRef}
              onChange={this.handlerOnChange}
              value={this.props.newMessage}
            ></textarea>
            <button onClick={this.handlerOnClick}>Send message</button>
          </div>
        </div>
      </div>
    );
  }
  handlerOnClick(e) {
    this.props.addMessage();
  }
  handlerOnChange(e) {
    this.props.addNewTextMessageArea(this.textareaRef.current.value);
  }
}

export default Dialogs;
