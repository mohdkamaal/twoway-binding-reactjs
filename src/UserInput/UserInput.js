import React from 'react';
class userInput extends React.Component{

constructor(props) {
    super(props);
    this.state = { }
}


    render(){
        return (
            <div>
                <input type="text" placeholder="enter anything" onChange={this.props.changed}
                value={this.props.currentName}/>
            </div>
        )
    }
}
export default userInput;
