import React, { Component } from 'react'
//import {}
import './index.less'
// import  WithNavigation  from '../../pages/withNavigation'
import { Button, navtabs } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'

class head extends Component {
  tostudy = ()=>{
    const navigate = useNavigate();
    navigate(`/home`);
    // console.log(this.props);
    // this.props.history.push(`/home`,{id:'id'})
  }
  render() {
    const id ='xx'
    return (
      // <Button variant="danger">点击</Button>
      // <Button variant="primary">点击</Button>
      // <Button variant="warning">点击</Button>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 header2">
              <div className="row">
                {/* 标题 */}
                <div className='col-xs-4 Rincil '>
                  <div className="head111">
                    <p>Rrincl'SBlog</p>
                  </div>
                </div>

                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111">
                    {/*  */}
                    <Link 
                      to='study'
                      state={{
                        id:id
                      }}
                      >Study</Link>
                    <Button variant="primary" onClick={this.tostudy}>Study</Button>
                    
                  </div>
                </div>

                <div className=' hidden-xs col-sm-4 col-sm-offset-4 hidden-md hidden-lg'>
                  <div className="head111">
                    <Button variant="primary">点击2</Button>
                  </div>
                </div>
                {/* 小屏：多览；*/}
                <div className=' col-md-4 col-xs-offset-4 col-xs-4 hidden-lg hidden-md hidden-sm'>
                  <div className="head111">
                    <Button variant="primary">点击3</Button>
                  </div>
                </div>

                {/* 中屏：按钮；大屏：按钮  */}
                <div className='col-sm-4 hidden-xs hidden-sm col-md-4'>
                  <div className="head111">
                    <Button variant="primary">点击4</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  hidden-sm hidden-xs header2">
              <div className="row">
                {/* 中屏：按钮；大屏：按钮  */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111">
                    <Button variant="primary">点击5</Button>
                  </div>
                </div>
                {/* 中屏：按钮；大屏：按钮  */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111">
                    <Button variant="primary">点击6</Button>
                  </div>
                </div>
                {/* 中屏：按钮；大屏：按钮  */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111">
                    <Button variant="primary">点击7</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 hidden-xs header2">
              <div className="row">
                  {/* 中屏：按钮；大屏：按钮  */}
                  <div className=' hidden-xs col-sm-4 '>
                    <div className="head111">
                      <Button variant="primary">点击8</Button>
                    </div>
                  </div>
                  {/* 中屏：按钮；大屏：按钮  */}
                  <div className=' hidden-xs col-sm-4 '>
                    <div className="head111">
                      <Button variant="primary">点击9</Button>
                    </div>
                  </div>
                  {/* 中屏：按钮；大屏：按钮  */}
                  <div className=' hidden-xs col-sm-4 '>
                    <div className="head111">
                      <Button variant="primary">点击10</Button>
                    </div>
                  </div>
                </div>              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default head