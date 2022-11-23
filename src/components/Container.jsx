import React, { Component } from "react";

class Container extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="w-full h-full bg-gradient-to-r from-sky-100 via-purple-100 to-orange-100">
        {children}
      </div>
    );
  }
}

export default Container;
