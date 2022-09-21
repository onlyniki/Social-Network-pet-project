import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./Store-context";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <StoreContext.Consumer>
          {store => {
            return <Navbar state={store.getState().sideBarData} />;
          }}
        </StoreContext.Consumer>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <StoreContext>
                  {store => {
                    return (
                      <DialogsContainer
                        dispatch={store.dispatch}
                        dialogsState={store.getState().dialogsData}
                      />
                    );
                  }}
                </StoreContext>
              }
            />
            <Route
              path="/profile"
              element={
                <StoreContext.Consumer>
                  {store => {
                    return (
                      <Profile
                        profileState={store.getState().profileData}
                        dispatch={store.dispatch}
                      />
                    );
                  }}
                </StoreContext.Consumer>
              }
            />
            <Route path="/music" element={<Music />} />
            <Route path="/News" element={<News />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
