// 引入UI容器
// import CountUI from '../../components/body/counter/count2'
// 引入createIncrement
import { createIncrement,createDecrement } from '../redux/actions/count';
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'
class count extends Component {
  
  increment = ()=>{
    const {value} = this.selected
    console.log(this.props);
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
    return (
      <div>
        <p>当求和为{this.props.count}</p>
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


export default connect(
  state => ({count:state}),
  // action自动分发，自动调用dispatch()
  {
    jia:createIncrement,//返回一个action对象
    jian:createDecrement
  }
)(count)