import React, { Component } from 'react'
//import {}
import './index.less'
import { Button,navtabs} from 'react-bootstrap'
export default class head extends Component {
  render() {
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
                  {/* 小屏：空；中屏：空；大屏：按钮 */}
                  {/* <div className='col-xs-4 hidden-xs col-sm-offset-4 col-md-pull-4'>
                    <div className="head111">
                    <Button variant="primary">点击2</Button>
                    </div>
                  </div> */}
                  <div className='hidden-sm col-md-4 '>
                    <div className="head111">
                      <Button variant="primary">点击2</Button>
                    </div>
                  </div>                  
                  {/* 小屏：多览；中屏：按钮；大屏：无*/}
                  {/* <div className='col-xs-4 hidden-sm col-xs-offset-4  hidden-md '>
                    <div className="head111">
                      <div className="pernalinfo ">

                      </div>
                    </div>
                  </div> */}
                  {/* 小屏：多览；中屏：按钮；大屏：按钮 */}
                  <div className='hidden-sm col-md-4 '>
                    <div className="head111">
                      <Button variant="primary">点击3</Button>
                    </div>
                  </div>


                </div>
              </div>
              <div className="col-md-4  hidden-sm hidden-xs header2">2</div>
              <div className="col-md-4 col-sm-6 hidden-xs header2">3</div>
            </div>
          </div>
      </div>
    )
  }
}

