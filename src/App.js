import React from "react";
import "./App.css";
import InputName from "./inputName/inputname"; // input 1, input 2 & Show Button
import OutputFirst from "./inputName/outputFirst"; // output 1, output 2 both in this

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      lastnameout: "",
      fullname: "",
      isValid: false,
    };
    // this.shoot.bind(this);
  }
  ChangeHandler = (event) => {
    if (event.target.id == "input1") {
      this.setState({ username: event.target.value });
    } else if (event.target.id == "input2") {
      this.setState({ lastnameout: event.target.value });
    }
  };

  shoot = () => {
    if (this.state.username != "" && this.state.lastnameout != "") {
      this.setState({
        isValid: true,
        fullname:
          this.state.username +
          " " +
          this.state.lastnameout +
          " Congratulations to you !!!",
      });
    } else {
      this.setState({
        isValid: false,
      });
      alert("fields cannot be blank !!!");
    }
  };

  render() {
    return (
      <div className="App">
        {/* component called for input field & show button component*/}
        <InputName
          changed={this.ChangeHandler}
          // changedTwo={this.ChangeHandlerTwo}
          btnHandler={this.shoot}
          btnOutput={this.state.fullname}
          isvalid={this.state.isValid}
        />
        {/* output component called for show output for firstname field  */}
        <OutputFirst
          userName={this.state.username}
          nameLast={this.state.lastnameout}
        />
      </div>
    );
  }
}

export default App;
