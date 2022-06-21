import React, { Component } from 'react'

export default class hooks extends Component {
  state = {
    count:0
  }
  myref = React.createRef()
  //加1
  add=()=>{
    //第一种写法
    usecount(count+1)
    //第二种写法
    usecount(count=>count+1)
  }
  showref = ()=>{
    alert(this.myref.current.value)
  }
  //加1 
  useEffectADD = ()=>{
    // useEffect(()=>{
    //   let timer = setInterval(()=>{ 
    //     usecount(count+1)
    //   },500)
    //   return ()=>{     //返回的函数相当于componentWillunmount
    //     clearInterval(timer) // 清除定时器
    //   }
    // },[count])
  }
  //卸载组件
  // didmount = ()=>{
  //   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // }
  showref = ()=>{
    alert(this.myref.current.value)
  }
  // 卸载之前清空定时器
  // React.componentWill
  render() {
    return (
      <div>
        <input type="text" ref={this.myref}/>
        <p>{count}</p>
        <button onClick={add}>加</button>
        <button onClick={useEffectADD}>加</button>
        <button onClick={didmount}>卸载组件</button>
        <button onClick={showref}>显示数据</button>
  
      </div>
    )
  }
}
