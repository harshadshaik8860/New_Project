import React, { Component } from 'react'

 class ChildClass extends Component {
    
    
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <button onClick={()=>this.props.changename("I am from Child")}>Button from Child</button>
            </div>
        )
    }
}

export default ChildClass
