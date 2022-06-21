import React from 'react'
import './index.less'
import { useState } from 'react'
export default function Swiper() {
  const [imgurlitem,useimgurlitem] = useState([])
  return (
    <div className='Swiper'>
      <div className="jumbotron changBorderRadius">
        <h1>Hello, Swiper!</h1>
        <p>...</p>
        {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> */}
      </div>
      <div className="contianer">
        <div className="row">
          {
            imgurlitem.map(item=>{
              <div className="imgitem" key={item.id}>
                <img src={item.url} alt="" />
                <p>{item.name}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
