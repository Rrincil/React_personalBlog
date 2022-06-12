import {Navigate } from "react-router-dom";
import Home from '../components/Home'
import Study from '../components/body/study'
const routes = [

  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element: <Home/>,
    children:[
      {
        path:'study',
        element:<Study/>
      }
    ]
  },
]
export default routes