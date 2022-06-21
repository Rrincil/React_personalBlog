import React from 'react'
import './index.less'
import Swiper from '../../swiper'
import { useState } from 'react'
export default function HomePage() {
  const [weblist, useweblist] = useState([
    { id: '01', url: 'http://101.201.220.43:8001', imgurl: 'http://101.201.220.43:3001/img/1652104386582.jpeg' },
    { id: '02', url: 'http://101.201.220.43:8002', imgurl: 'http://101.201.220.43:3001/img/1652104445976.jpeg' },
    { id: '03', url: 'http://101.201.220.43', imgurl: 'http://101.201.220.43:3001/img/1652104445976.jpeg' },
  ])
  return (
    <div className='HomePage'>
      <Swiper />
      <div className='weblist'>
        <div className="container">
          <div className="row marginingbuttom">
            {
              weblist.map(item => {
                return (
                  <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' key={item.id}>
                    <div className="row">
                      <div className="one" >
                        <a href={item.url}>
                          xxx
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
