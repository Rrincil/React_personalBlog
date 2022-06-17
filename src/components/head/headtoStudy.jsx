import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function HeadtoStudy() {
  const navigate = useNavigate()
  function a(x){
    console.log('headStudy---------'+x);
    navigate('studyinfo',{
      replace:true,
      state:{
        name:x
      }
    })
  }
  return ( 
    <button onClick={()=>a('Jquery')}>Jquery</button>
  )
}
