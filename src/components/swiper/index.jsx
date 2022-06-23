import React from 'react'
import './index.less'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
// import { unmountComponentAtNode } from 'react-dom'
export default function Swiper() {
  const [showimgitem, usetshowimgitem] = useState(false)
  // const [imgitemMovie,useimgitemMovie] = useState('imgitemMovie')
  const [imgurlitem, useimgurlitem] = useState([
    { id: '01', name: '后台管理系统', url: 'http://101.201.220.43:8001', imgurl: 'http://101.201.220.43:3002/md/xx.gif',istrue:true },
    { id: '02', name: 'xxx', url: 'http://101.201.220.43:8002', imgurl: "http://101.201.220.43:3002/md/cat3.webp",istrue:false },
    { id: '03', name: '购物商城', url: 'http://101.201.220.43', imgurl: "http://101.201.220.43:3002/md/money.webp",istrue:false },
  ])
  function toshowimgitem(id){
    // setInterval(()=>{
      const index = imgurlitem.findIndex(item=>item.id === id)
      const imgurlitem2 =imgurlitem
      imgurlitem[index].istrue = !imgurlitem[index].istrue
      if(index<imgurlitem.length-1){
        imgurlitem[index+1].istrue = true
        // useimgitemMovie('imgitemMovie2')
      }else{
        imgurlitem[0].istrue = !imgurlitem[0].istrue
        // useimgitemMovie("imgitemMovie2")
      }
      useimgurlitem(imgurlitem2)
      usetshowimgitem(!showimgitem)      
      console.log(imgurlitem);

    // },5000)
  }
  // unmountComponentAtNode(){

  // }
  return (
    <div className='Swiper'>
      <div className="jumbotron changBorderRadius">
        <h1>Hello, Swiper!</h1>
        <p>...</p>
        {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> */}
      </div>
      <div className="container">
        <div className="row">
          {
            imgurlitem.map(item => {
              return (
                <div key={item.id} >
                <CSSTransition
                  in={item.istrue}
                  timeout={800}
                  classNames="imgitemMovie"
                  unmountOnExit
                >
                  <div className="imgitem"  onClick={()=>toshowimgitem(item.id)} style={{display:item.istrue}}>
                    <img src={item.imgurl} alt="" />
                    <p>{item.name}</p>
                  </div>
                </CSSTransition>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
