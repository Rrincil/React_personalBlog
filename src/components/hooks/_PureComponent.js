import React, { Component } from 'react'

export default class Pure_Component extends Component {
  state = {
    name:'Pure_Component'
  }
  shouldComponentUpdate(nextProps,nextState){
    // alert(nextProps+'------'+nextState);
    if(this.state !== nextState){
      return false
    }else{
      return true
    }
    // return true
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
  shouldComponentUpdate(nextProps,nextState){
    if(this.props !== nextProps){
      return false
    }else{
      return true
    }
  }  
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
