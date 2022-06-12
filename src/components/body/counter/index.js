import React, { Component } from 'react'
import store from '../../../redux/store'
export default class index extends Component {
  // componentDidMount(){
  //   // 检测redux中的状态的变化，只要变化，就调用render
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  
  increment = ()=>{
    const {value} = this.selected
    store.dispatch({type:'increment',data:value*1})
  }
  decrement = ()=>{
    const {value} = this.selected
    store.dispatch({type:'decrement',data:value*1})

  }
  incrementIfOdd = ()=>{
    const {value} = this.selected
    if(this.state.count%2!=0){
      this.setState({count:this.state.count+value*1})
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selected
    setInterval(() => {
      this.setState({count:this.state.count+value*1})
    }, 5000);
  }
  render() {
    return (
      <div>
        <p>当求和为{store.getState()}</p>
        <select ref={c=>this.selected = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
