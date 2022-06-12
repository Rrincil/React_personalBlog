const initstate = 0
// 形参默认值初始化 prestate的值
export default function countreducer(prestate=initstate,action){
  // 初始化
  // if(prestate === undefined) prestate = 0
  const {type,data} = action
  switch(type){
    case 'increment':
      return prestate+data
    case 'decrement':
    return prestate+data
      case 'incrementIfOdd':
    return prestate+data
    default :
    return prestate
  }
}