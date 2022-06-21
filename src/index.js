import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react';
// import ReactDOM from 'react';
// import { ReactDOM } from "react";
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
//检测redux中状态的改变，若改变就重新渲染App组件
// store.subscribe(()=>{
//   root.render(<App/>,document.getElementById('root'));
// })
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// ReactDOM.render(
//   // 17.0版本之后增加<React.StrictMode>（jsx写法） 在严格模式下检查是否代码合理
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();
