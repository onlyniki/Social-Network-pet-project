import classes from "./Header.module.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <img
          src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
          alt="logo"
        />
      </header>
    );
  }
}

export default Header;
