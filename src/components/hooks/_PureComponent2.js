import React, { Component } from 'react'
import { PureComponent } from 'react'

export default class Pure_Component extends PureComponent{
  state = {
    name:'Pure_Component'
  }
  changeName = ()=>{
    this.setState({name:'jjj'})
    alert(this.state.name)
  }
  render() {
    console.log('father');
    const {name} = this.state
    return (
      <div>
        {name}
        <button onClick={this.changeName}>
          换名字
        </button>
        <Child name={name}/>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    console.log('child');
    const {name} = this.props
    return (
      <div>
        child-----{name}
      </div>
    )
  }
}
