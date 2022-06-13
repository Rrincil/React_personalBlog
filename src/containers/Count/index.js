// 引入UI容器
import CountUI from '../../components/body/counter/count2'
// 引入createIncrement
import { createIncrement,createDecrement } from '../../redux/actions/count';
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'
//返回的对象中的key作为传递给UI组件的key,value作为传递的---状态
function mapStateToprops(state){
  return {count:state};
}
//返回的对象中的key作为传递给UI组件的key,value作为传递UI组件---操作状态的方法
function mapDispathToprops(dispatch){
  return {
    jia:number=>dispatch(createIncrement(number)),
    jian:number=>dispatch(createDecrement(number)) 
  };
}
// export default connect(mapStateToprops,mapDispathToprops)(CountUI)
export default connect(
  state => ({count:state}),
  // dispatch=>({
  //   jia:number=>dispatch(createIncrement(number)),
  //   jian:number=>dispatch(createDecrement(number)) 
  // })
  // action自动分发，自动调用dispatch()
  {
    jia:createIncrement,//返回一个action对象
    jian:createDecrement
  }
  
)(CountUI)