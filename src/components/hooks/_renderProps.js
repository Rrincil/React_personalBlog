import React, { Component } from 'react'

export default class _renderProps extends Component {
  state = {
    name:'tom'
  }
  render() {
    return (
      <div>
        <A>你好</A>
        <A render = {(name)=><B name={name}/>}/> {/* 预留位置写入组件 */}
        <A render = {(name)=><C name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
  state = {
    name:'tomA'
  }
  render() {
    const {name} = this.state
    return (
      <div>
        {this.props.children}   {/* 拿到标签体内容 */}
        {this.props.render(name)} {/* 预留位置，类似插槽 */}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        -----B
      </div>
    )
  }
}
class C extends Component {
  render() {
    return (
      <div>
        -----C
      </div>
    )
  }
}
