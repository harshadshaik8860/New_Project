import React, { Component } from 'react'
import ChildClass from './ChildClass'

 class ParentClass extends Component {
     constructor(props){
         super(props);
         this.state={
            name: "I am from parent"
         }
     }

    changeName=(name)=>{
        this.setState({
            name : name
        })
    }

    render() {
        return (
            <div>
                
                <ChildClass  name={this.state.name} changename={this.changeName.bind(this)}/>
            </div>
        )
    }
}

export default ParentClass

