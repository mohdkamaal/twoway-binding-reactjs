import React from 'react';
import './App.css';
import Input from './UserInput/UserInput'
import Output from './UserOutput/UserOutput'


class App extends React.Component{

  constructor(){

    super()
  this.state = {
    username: "supermax"

  }
}
  usernameChangeHandler=(event) => {



    this.setState({username: event.target.value });
  }

  render(){
    return (
        <div className="">
            <ol>
                <li>created two components with Input and Output</li>
                <li>userinput should hold an input element</li>
                <li>input multiple useroutput components in the app</li>
            </ol>
            <Input changed={this.usernameChangeHandler}
                  currentname={this.state.username}/>
            <Output userName={this.state.username}/>


        </div>
    );

  }
}

export default App;