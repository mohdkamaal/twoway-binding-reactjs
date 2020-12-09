import React from "react";

class OutputFirst extends React.Component {
  constructor(props) {
    super();
    this.state = {
      output: "abc",
    };
  }

  render() {
    return (
      <div>
        <p>First Name: {this.props.userName} </p>
        <p>Last Name: {this.props.nameLast} </p>
      </div>
    );
  }
}

export default OutputFirst;
