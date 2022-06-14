import React, { Component } from 'react'
//import {}
import './index.less'
import middlestudyshow from './index.less'
// import  WithNavigation  from '../../pages/withNavigation'
import { Button, navtabs } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

class head extends Component {
  state = {
    studyshow: 'none',
    studylist: []
  }
  tostudy = () => {
    const navigate = useNavigate();
    navigate(`/home`);
    // console.log(this.props);
    // this.props.history.push(`/home`,{id:'id'})
  }
  showto = (studyname) => {
    if (this.state.studyshow == 'block') {
      this.setState({ studyshow: 'none' })
    } else {
      // 显示时请求数据
      
      const a = [
        { id: '001', name: 'xxx', age: 15 }
      ]
      this.setState({ studylist: a })
      this.setState({ studyshow: 'block' })
      console.log(studyname);
    }
  }
  render() {
    const id = 'xx'
    return (
      // <Button variant="danger">点击</Button>
      // <Button variant="primary">点击</Button>
      // <Button variant="warning">点击</Button>
      <div className="header">
        <div className="container">
          <div className="row">

            {/* 左边------ */}
            <div className="col-md-4 col-sm-9 col-xs-12 header2">
              <div className="row">
                {/* 标题 */}
                <div className='col-xs-4 Rincil '>
                  <div className="head111">
                    <p>Rrincl'SBlog</p>
                  </div>
                </div>
                {/* 仅大屏显示：基础知识 */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    {/*  */}
                    <Link
                      to='study'
                      state={{
                        id: id
                      }}
                    >基础知识</Link>
                    {/* <Button variant="primary" onClick={this.tostudy}>基础知识</Button> */}
                  </div>
                </div>
                {/* 仅中屏显示：分类 */}
                <div className=' hidden-xs col-sm-4  hidden-md hidden-lg'>
                  <div className="head111 allcate">
                    <Button variant="primary" onClick={() => this.showto("基础和进阶")}>基础和进阶</Button>
                    <ul className='middlestudy' style={{ textDecoration: "none", color: 'red', display: this.state.studyshow }}>
                      {
                        this.state.studylist.map((item) => {
                          return <li key={item.id}>{item.name}</li>
                        })
                      }
                    </ul>
                  </div>
                </div>
                {/* 仅小屏显示：多览所有分类；点击显示具体类别以及头像*/}
                <div className=' col-md-4 col-xs-offset-4 col-xs-4 hidden-lg hidden-md hidden-sm'>
                  <div className="">
                    <div className="row">
                      {/* 所有分类 */}
                      <div className='col-xs-6 allcate '>
                        <button type="button" class="btn btn-default" aria-label="Left Align">
                          <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className='col-xs-6 avater'>
                        <Button variant="primary">
                          <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 仅大屏显示：进阶知识  */}
                <div className='col-sm-4 hidden-xs hidden-sm col-md-4'>
                  <div className="head111 allcate">
                    <Button variant="primary">进阶知识</Button>
                  </div>
                </div>
              </div>
            </div>

            {/*中间------ 仅大屏显示：分类，使用懒加载  */}
            <div className="col-md-4  hidden-sm hidden-xs header2">
              <div className="row">
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击5</Button>
                  </div>
                </div>
                {/* 大屏：按钮  */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击6</Button>
                  </div>
                </div>
                {/* 大屏：按钮  */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击7</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* 右边------中屏和大屏显示：分类，使用懒加载  */}
            <div className="col-md-4 col-sm-3 hidden-xs header2">
              <div className="row">
                {/* 中屏大屏：按钮  */}
                <div className=' hidden-xs col-sm-4 '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击8</Button>
                  </div>
                </div>
                {/* 仅大屏：按钮  */}
                <div className=' hidden-xs hidden-sm col-sm-4 '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击9</Button>
                  </div>
                </div>
                {/* 仅大屏：头像  */}
                <div className=' hidden-xs col-sm-4 hidden-sm'>
                <div className="head111 avater">
                    <Button variant="primary">
                      <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </Button>
                  </div>
                </div>

                {/* 仅中屏：头像  */}
                <div className=' hidden-xs col-sm-4 col-sm-offset-2 hidden-lg hidden-md'>
                  <div className="head111 avater">
                    <Button variant="primary">
                      <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </Button>
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