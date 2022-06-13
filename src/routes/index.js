import { lazy } from "react";
import {Navigate } from "react-router-dom";
const Home = lazy(()=>import( '../components/Home'))
const Study = lazy(()=>import('../components/body/study'))
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