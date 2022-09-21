const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT";

const initialState = {
  messages: ["hello", "how are you", "i`m fine", "and you?", "i am too"],
  newMessage: "kek",
  dialogsUsers: [
    { id: "Sveta", name: "Sveta", ref: "/dialogs/1" },
    { id: "Polina", name: "Polina", ref: "/dialogs/2" },
    { id: "Buhlina", name: "Buhlina", ref: "/dialogs/3" },
    { id: "Porosenok", name: "Porosenok", ref: "/dialogs/4" },
    { id: "Sin9k", name: "Sin9k", ref: "/dialogs/5" },
    { id: "L9ha", name: "L9ha", ref: "/dialogs/6" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push(state.newMessage);
      state.newMessage = "";
      return state;
    case ADD_NEW_MESSAGE_TEXT:
      state.newMessage = action.message;
      return state;
    default:
      return state;
  }
};

export function createAddMessageAction() {
  return {
    type: ADD_MESSAGE,
  };
}
export function createAddNewMessageTextAction(text) {
  return {
    type: ADD_NEW_MESSAGE_TEXT,
    message: text,
  };
}

export { dialogsReducer };
