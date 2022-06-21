// 为count生成action对象
// const createDecrement = ()=>({type:'increment',data})
// function createIncrement(data){
//   return {type:'increment',data}
// }
import { INCREMENT,DECREMENT,INCREMENTIFODD } from "../constant"
import store from "../store"
export const createIncrement = data=>({type:INCREMENT,data})
export const createDecrement = data=>({type:DECREMENT,data})
export const createIncrementOFIdd = data =>({type:INCREMENTIFODD,data})
// 返回异步action 
export const createIncrementAsync = (data,time) =>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch({type:INCREMENT,data})
      // return {type:INCREMENT,data}
    // store.setState(createIncrement(data))
    },time)
  }
}
