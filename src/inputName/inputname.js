import React from 'react';
class InputName extends React.Component{

constructor(props) {
    super(props);
    this.state = { }
}


    render(){
        return (
            <div>
                <input type="text" placeholder="enter first name" onChange={this.props.changed}
                />
            </div>
        )

    }
}
export default InputName;