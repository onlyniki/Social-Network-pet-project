const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
