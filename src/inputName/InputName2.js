import React from 'react';
class InputName2 extends React.Component{

constructor(props) {
    super(props);
    this.state = { }
}


    render(){
        return (
            <div>
                <input type="text" placeholder="enter last name" onChange={this.props.changedTwo}/>
            </div>
        )

    }
}
export default InputName2;