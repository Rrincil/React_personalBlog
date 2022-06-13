import React,{ReactDOM, useState,useEffect } from 'react'
export default function index() {
  const [count,usecount] = React.useState(0)
  //加1
  const add=()=>{
    //第一种写法
    usecount(count+1)
    //第二种写法
    usecount(count=>count+1)
  }
  
  //加1
  function useEffectADD(){
    let timer = useEffect(()=>{
      setInterval(()=>{ 
        usecount(count+1)
      },500)
      return ()=>{     //返回的函数相当于componentWillunmount
        clearInterval(timer) // 清除定时器
      }
    },[])
  }
  //卸载组件
  function didmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  // 卸载之前清空定时器
  React.componentWill
  return (
    <div>
      <p>{count}</p>
      {/* <button onClick={add}>加</button> */}
      <button onClick={useEffectADD}>加</button>
      <button onClick={didmount}>卸载组件</button>
    </div>
  )
}
