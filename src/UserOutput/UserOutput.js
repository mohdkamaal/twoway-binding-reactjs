import React from 'react';

class Output extends React.Component{
    constructor(props){
        super();
        this.state = {
            output: 'abc'
        }
    }

    render(){
        return (
            <div>

                <p>two way binding : {this.props.userName} </p>
            </div>
        )
    }
}

export default Output