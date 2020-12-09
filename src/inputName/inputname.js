import React from "react";
class InputName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="input1"
          placeholder="enter first name"
          onChange={this.props.changed}
          required
        />
        <br />
        <input
          id="input2"
          type="text"
          placeholder="enter last name"
          onChange={this.props.changed}
          // onChange={this.props.changedTwo}
          required
        />
        <br />
        <br />
        <button onClick={this.props.btnHandler}>show fullname !</button>

        {this.props.isvalid && <h3> {this.props.btnOutput} </h3>}
      </div>
    );
  }
}
export default InputName;
