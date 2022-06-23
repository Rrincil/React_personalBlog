import React from 'react'
import './index.less'
import Swiper from '../../swiper'
import { useState } from 'react'
export default function HomePage() {
  const [weblist, useweblist] = useState([
    { id: '01', name:'后台管理系统', url: 'http://101.201.220.43:8001', imgurl: 'http://101.201.220.43:3002/md/xx.gif' },
    { id: '02', name:'xxx' ,url: 'http://101.201.220.43:8002', imgurl: "http://101.201.220.43:3002/md/cat3.webp" },
    { id: '03', name:'购物商城' ,url: 'http://101.201.220.43', imgurl: "http://101.201.220.43:3002/md/money.webp" },
  ])
  return (
    <div className='HomePage'>
      <div className="homeswiper">
        <Swiper />
      </div>
      <div className='weblist'>
        <div className="container">
          <div className="webtop">
            网站展示----友情链接
          </div>
          <div className="row marginingbuttom">
            {
              weblist.map(item => {
                return (
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12' key={item.id}>
                    <div className="row">
                      <div className="one" >
                        <a href={item.url}>
                          {item.name}
                          <img className='webimg' src={item.imgurl} alt="" />
                        </a>
                      </div>                      
                    </div>
                </div>)
              })
            }    
          </div>      
        </div>
      </div>
      {/* HomePage */}
    </div>
  )
}
