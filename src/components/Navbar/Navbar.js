import classes from "./Navbar.module.css";
import React from "react";
import LinkItem from "./LinkItem/LinkItem";
import SideBarFriends from "./SideBarFriends/SideBarFriends";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.state.navBarLinks;
  }
  render() {
    return (
      <nav className={classes.nav}>
        {this.data.map(item => {
          return (
            <LinkItem
              key={item.id}
              activeClass={classes.active}
              itemClass={classes.item}
              linkName={item.name}
              linkRef={item.ref}
            />
          );
        })}
        <SideBarFriends state={this.props.state.sideBarFriends} />
      </nav>
    );
  }
}

export default Navbar;
