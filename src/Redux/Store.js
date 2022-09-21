import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

const store = {
  _state: {
    profileData: {
      postsData: [
        { id: "1", postText: "Hello World!!", likes: "12" },
        { id: "2", postText: "Polina Top Porosenok", likes: "123" },
        { id: "3", postText: "U Polini OGROMNIE l9shechki", likes: "122" },
        { id: "4", postText: "Polina mnogo kushaet", likes: "1223" },
        { id: "5", postText: "I poetomu u nee bolsha9 popa", likes: "1432" },
        { id: "6", postText: "mne nravitsa ee popa", likes: "1212" },
      ],
      newPostText: "kekis",
    },
    dialogsData: {
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
    },
    sideBarData: {
      navBarLinks: [
        { id: "Profile", name: "Profile", ref: "/profile" },
        { id: "Messages", name: "Messages", ref: "/dialogs" },
        { id: "News", name: "News", ref: "/news" },
        { id: "Music", name: "Music", ref: "/music" },
        { id: "Settings", name: "Settings", ref: "/settings" },
      ],
      sideBarFriends: [
        { id: "Sveta", name: "Sveta", isActive: true },
        { id: "Sasha", name: "Sasha", isActive: true },
        { id: "Polina", name: "Polina", isActive: true },
      ],
    },
  },
  get state() {
    return this._state;
  },
  subscribe(observer) {
    this._subFunc = observer;
  },

  _subFunc() {
    return null;
  },
  dispatch(action) {
    this._state.profileData = profileReducer(this._state.profileData, action);
    this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);

    this._subFunc(this);
  },
};

export { store };
