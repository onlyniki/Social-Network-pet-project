import React from "react";
import {
  createAddMessageAction,
  createAddNewMessageTextAction,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.dataUsers = this.props.dialogsState.dialogsUsers;
    this.messages = this.props.dialogsState.messages;
    this.textareaRef = React.createRef();
    this.addMessage = this.addMessage.bind(this);
    this.addNewTextMessageArea = this.addNewTextMessageArea.bind(this);
  }

  render() {
    return (
      <Dialogs
        dataUsers={this.dataUsers}
        messages={this.messages}
        newMessage={this.props.dialogsState.newMessage}
        addMessage={this.addMessage}
        addNewTextMessageArea={this.addNewTextMessageArea}
      />
    );
  }
  addMessage() {
    const action = createAddMessageAction();
    this.props.dispatch(action);
  }
  addNewTextMessageArea(text) {
    const action = createAddNewMessageTextAction(text);
    this.props.dispatch(action);
  }
}

export default DialogsContainer;
