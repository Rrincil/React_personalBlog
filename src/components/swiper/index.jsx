import React from 'react'
import './index.less'
import { useState } from 'react'
export default function Swiper() {
  const [imgurlitem, useimgurlitem] = useState([
    { id: '01', name: '后台管理系统', url: 'http://101.201.220.43:8001', imgurl: 'http://101.201.220.43:3002/md/xx.gif' },
    { id: '02', name: 'xxx', url: 'http://101.201.220.43:8002', imgurl: "http://101.201.220.43:3002/md/cat3.webp" },
    { id: '03', name: '购物商城', url: 'http://101.201.220.43', imgurl: "http://101.201.220.43:3002/md/money.webp" },
  ])
  return (
    <div className='Swiper'>
      <div className="jumbotron changBorderRadius">
        <h1>Hello, Swiper!</h1>
        <p>...</p>
        {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> */}
      </div>
      <div className="container">
        <div className="row">
          xx
          {
            imgurlitem.map(item => {
              return (
                <div className="imgitem" key={item.id}>
                  <img src={item.imgurl} alt="" />
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
