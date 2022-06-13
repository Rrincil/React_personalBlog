//引入执行中间件帮助使用thunk applyMiddleware(thunk)
import { createStore,applyMiddleware } from "redux";
import count from './reducers/count'
//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";
export default createStore(count,applyMiddleware(thunk))
