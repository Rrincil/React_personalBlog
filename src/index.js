import React from 'react';
import ReactDOM from 'react-dom/client';
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
//   ReactDOM.render(<App/>,document.getElementById('root'));
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

//reportWebVitals();
