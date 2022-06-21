import React from 'react'
import { ReactDOM } from 'react'
import { useNavigate } from 'react-router-dom'
export  default function WithNavigation(Component){
    const a= useNavigate()
    return (props)=> <Component {...props} navigate = {a}/>
}
