import s from "./LinkItem.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

class LinkItem extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to={this.props.linkRef}
          className={navData =>
            navData.isActive
              ? `${this.props.itemClass} ${this.props.activeClass}`
              : this.props.itemClass
          }
        >
          {this.props.linkName}
        </NavLink>
      </div>
    );
  }
}

export default LinkItem;
