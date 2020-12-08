import React from "react";
import "./App.css";
// import Input from './UserInput/UserInput'
// import Output from './UserOutput/UserOutput'
import InputName from "./inputName/inputname";
import OutputFirst from "./inputName/outputFirst";
import InputName2 from "./inputName/InputName2";
import OutputLast from "./inputName/outputLast";
// import Showbtn from './inputName/showBtn'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      lastnameout: "",
      fullname: "",
      isValid: false,
    };
    // this.state = {
    //   lastnameout: "2"

    // }
  }
  ChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  ChangeHandlerTwo = (event) => {
    this.setState({ lastnameout: event.target.value });
  };

  // getFullName(e) {
  //   e.preventDefault();
  //   return ('Conratulations to you !!!' + this.state.username + " " + this.state.lastnameout);

  // }

  shoot() {
if (this.state.username != '' && this.state.lastnameout != ''){


    this.setState({
      isValid: true,
      fullname:

        this.state.username +
        " " +
        this.state.lastnameout + " Conratulations to you !!!"
    });
  } else {
    this.setState({
      isValid: false
    });
    alert('fields cannot be blank !!!')
  }
  }

  render() {
    return (
      <div className="App">
        {/* <Input changed={this.usernameChangeHandler}
                  currentname={this.state.username}/>
            <Output userName={this.state.username}/> */}
          {/* component called for input field */}
        <InputName changed={this.ChangeHandler} />
        {/* output component called for show output for firstname field  */}
        <OutputFirst userName={this.state.username} />

          {/* component called for lastname input field  */}
        <InputName2 changedTwo={this.ChangeHandlerTwo} />
        {/* output component called for lastname output to show */}
        <OutputLast nameLast={this.state.lastnameout} />
        {/* button for output for firstname and lastname !!   */}
        {/* <Showbtn fullnameout={this.state.getFullName} /> */}
        <button onClick={() => this.shoot ()}>show fullname !</button>
         {/* to show output of button below paragraph   */}
         {
           this.state.isValid && <p> {this.state.fullname}</p>
         }

      </div>
    );
  }
}

export default App;
