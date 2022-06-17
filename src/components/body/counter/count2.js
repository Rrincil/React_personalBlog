import React, { Component } from 'react'
export default class count2 extends Component {
  
  increment = ()=>{
    const {value} = this.selected
    // console.log(this.props.count);
    //使用容器组件传递过来的jia方法
    this.props.jia(value*1)
  }
  decrement = ()=>{
    const {value} = this.selected

  }
  incrementIfOdd = ()=>{
    const {value} = this.selected
  }
  incrementAsync = ()=>{
    const {value} = this.selected
  }
  render() {
    // console.log('====================================');
    // console.log(this.props);
    // console.log('====================================');
    return (
      <div>
        <p>当求和为{}</p>
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
