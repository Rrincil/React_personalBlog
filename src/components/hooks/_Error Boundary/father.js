import React, { Component } from 'react'
import Son from './son'
export default class father extends Component {
  state = {
    errorMes:''
  }
  //当father的父组件出现错误时会调用并返回err
  static getDerivedStateFromError(err){
    console.log(err);
    return {errorMes:err}         //返回一个状态对象
  }
  componentDidCatch(){
    //统计错误次数发送给后台
    console.log('渲染子组件出现错误');
  }
  render() {
    return (
      <div>father
        {this.state.errorMes?<p>网络错误（组件出错）</p>:<Son/>}
      </div>
    )
  }
}
