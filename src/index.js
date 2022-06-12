import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
// store.subscribe(()=>{
//   root.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
//   );
// })
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);

//reportWebVitals();
