import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <i className="navbar-logo fas fa-leaf"></i>
          <span>Habit Tracker</span>
          <span className="habit-count">{this.props.navCount}</span>
        </nav>
      </>
    );
  }
}

export default NavBar;
