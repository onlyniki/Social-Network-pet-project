const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";

const initialState = {
  postsData: [
    { id: "1", postText: "Hello World!!", likes: "12" },
    { id: "2", postText: "Polina Top Porosenok", likes: "123" },
    { id: "3", postText: "U Polini OGROMNIE l9shechki", likes: "122" },
    { id: "4", postText: "Polina mnogo kushaet", likes: "1223" },
    { id: "5", postText: "I poetomu u nee bolsha9 popa", likes: "1432" },
    { id: "6", postText: "mne nravitsa ee popa", likes: "1212" },
  ],
  newPostText: "kekis",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: +state.postsData[state.postsData.length - 1].id + 1 + "",
        postText: state.newPostText,
        likes: "0",
      };

      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case ADD_NEW_POST_TEXT:
      state.newPostText = action.postText;
      return state;

    default:
      return state;
  }
};

export function createAddPostAction() {
  return {
    type: ADD_POST,
  };
}
export function createNewPostTextAction(text) {
  return {
    type: ADD_NEW_POST_TEXT,
    postText: text,
  };
}

export { profileReducer };
