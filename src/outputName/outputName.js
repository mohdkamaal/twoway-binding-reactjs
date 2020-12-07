import React from 'react';
class OutputName extends React.Component{

constructor(props) {
    super(props);
    this.state = { }
}


    render(){
        return (
            <div>
                <input type="text" placeholder="enter first name" onChange={this.props.changed}
                value={this.props.currentName}/>
            </div>
        )

    }
}
export default OutputName;