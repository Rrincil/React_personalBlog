//引入执行中间件帮助使用thunk applyMiddleware(thunk)
import { createStore,applyMiddleware } from "redux";
//引入合并的reducers
import { Allreducer } from "./reducers";
//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension 使用composeWithDevTools
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(Allreducer,composeWithDevTools(applyMiddleware(thunk)))
