import { lazy } from "react";
import {Navigate } from "react-router-dom";
const Home = lazy(()=>import( '../components/Home'))
const Study = lazy(()=>import('../components/body/study'))
const StudyInfo = lazy(()=>import('../components/body/studyInfo'))
const HomePage = lazy(()=>import('../components/Home/Homepage'))

const routes = [
  {
    path:'/',
    element:<Navigate to="/home/homepage"/>
  },
  {
    path:'/home',
    element: <Home/>,
    children:[
      {
        path:'homepage',
        element:<HomePage/>
      },
      {
        path:'study',
        element:<Study/>
      },
      {
        path:'studyinfo',
        element:<StudyInfo/>
      }      
    ]
  },
]
export default routes