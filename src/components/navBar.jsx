import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="habit-navBar">
          <span>Habit Tracker</span>
          <span className="habit-count">{this.props.navCount}</span>
        </div>
      </>
    );
  }
}

export default NavBar;
