import React from 'react';


class Showbtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }

    render(){
        return (
            <div>
                <button onClick={this.getFullName} >Show Full Name</button>
                <p>{this.state.fullnameout}</p>
            </div>
        )
    }
}

export default Showbtn;