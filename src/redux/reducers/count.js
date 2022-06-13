import { INCREMENT,DECREMENT,INCREMENTIFODD,INCREMENTASYNC } from "../constant"
const initstate = 0
// 形参默认值初始化 prestate的值
export default function countreducer(prestate=initstate,action){
  // 初始化
  // if(prestate === undefined) prestate = 0
  const {type,data} = action
  switch(type){
    case INCREMENT:
      return prestate+data
    case DECREMENT:
      return prestate-data
    case INCREMENTIFODD:
      return prestate+data
    case INCREMENTASYNC:
      return prestate+data
    default :
    return prestate
  }
}