import React from 'react'
import { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { Button} from 'react-bootstrap'
export default function HeadtoStudy(props) {
  const navigate = useNavigate()
  const {name} = props
  function a(){
    navigate('studyinfo',{
      replace:true,
      state:{
        name:name
      }
    })
    // console.log(name);
  }
  return ( 
    <div className='headtoStudy'>
      <div className="studyitem">
        <Button onClick={a} variant="primary">{name}</Button>           
      </div>
    </div>
  )
}
