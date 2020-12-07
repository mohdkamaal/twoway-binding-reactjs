import React from 'react';


class OutputLast extends React.Component{
    constructor(props){
        super();
        this.state = {
            output: 'abc'
        }
    }

    render(){
        return (
            <div>

                <p>Last Name: {this.props.nameLast} </p>
            </div>
        )
    }
}

export default OutputLast;