import React,{ReactDOM, useState,useEffect,useRef } from 'react'
export default function Index() {
// 定义状态
  // useState 的参数为状态初始值，setInitLoading为变更状态值的方法
  // const [initLoading, setInitLoading] = useState(true);  
  const [count,usecount] = useState(0)
  const myref = useRef()
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
  // function didmount(){
  //   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // }

  function showref(){
    console.log(myref.current.value);
  }  
  // 卸载之前清空定时器
  // React.componentWill
  return (
    <div>
      <input type="text" ref={myref}/>
      <p>{count}</p>
      <button onClick={add}>加</button>&nbsp;
      <button onClick={useEffectADD}>连续加</button>&nbsp;
      <button onClick={didmount}>卸载组件</button>&nbsp;
      <button onClick={showref}>显示数据</button>
    </div>
  )
}
