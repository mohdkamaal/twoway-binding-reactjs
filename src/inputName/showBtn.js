import React from 'react';


class Showbtn extends React.Component{
    constructor(props){
        super();
        this.state = {
            output: 'abc'
        }
    }

    render(){
        return (
            <div>

                <p>Congratulation to you !!! {this.props.nameLast} </p>
            </div>
        )
    }
}

export default Showbtn;