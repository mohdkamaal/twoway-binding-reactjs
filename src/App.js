import React from 'react';
import './App.css';
// import Input from './UserInput/UserInput'
// import Output from './UserOutput/UserOutput'
import InputName from'./inputName/inputname'
import OutputFirst from './inputName/outputFirst'
import InputName2 from './inputName/InputName2'
import OutputLast from './inputName/outputLast'
import Showbtn from './inputName/showBtn'


class App extends React.Component{

  constructor(){

    super()
  this.state = {
    username: "first",
    lastnameout: "last",
    fullname: " "

  }
  // this.state = {
  //   lastnameout: "2"

  // }
}
  ChangeHandler=(event) => {



    this.setState({username:  event.target.value});
  }

  ChangeHandlerTwo=(event) => {



    this.setState({lastnameout: event.target.value });
  }

  render(){
    return (
        <div className="">

            {/* <Input changed={this.usernameChangeHandler}
                  currentname={this.state.username}/>
            <Output userName={this.state.username}/> */}

            <InputName changed={this.ChangeHandler}/>
            <OutputFirst userName = {this.state.username} />


            <InputName2 changedTwo={this.ChangeHandlerTwo} />
            <OutputLast nameLast={this.state.lastnameout} />
            <Showbtn onClick="" />


        </div>
    );

  }
}

export default App;