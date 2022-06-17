import React, { Component } from 'react'
//import {}
import './index.less'
import middlestudyshow from './index.less'
// import  WithNavigation  from '../../pages/withNavigation'
import { Button, navtabs } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HeadtoStudy from './headtoStudy'
class head extends Component {
  searchinfo = React.createRef()
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
      let a = [
        { _id: '001', name: 'Jquery', age: 15 }
      ]

      // axios.post(`api/allproduct/togetallmes`).then(res => {
      //   console.log('====================================');
      //   console.log(res);
      //   console.log('====================================');
      //   if (res.data) {
      //     a = res.data
      //     console.log(a);
          this.setState({ studylist: a })
          this.setState({ studyshow: 'block' })
      //   }

      // })

    }
  }
  toshowitem = (item) => {
    
  }
  //搜索
  searchto = () => {
    const info = this.searchinfo.current.value
    alert(info)
  }
  render() {
    const id = 'xx'
    return (
      // <Button variant="danger">点击</Button>
      // <Button variant="primary">点击</Button>
      // <Button variant="warning">点击</Button>
      <div className="header">
        <div className="container marginNone">
          <div className="row paddingNone">

            {/* 左边------ */}
            <div className="col-md-4 col-sm-9 col-xs-12 header2">
              <div className="row paddingNone">
                {/* 标题 */}
                <div className='col-xs-4 Rincil '>
                  <div className="head111 Rincil">
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
                <div className=' hidden-xs col-sm-3  hidden-md hidden-lg'>
                  <div className="head222 allcate">
                    <HeadtoStudy/>
                    {/* <Button variant="primary" onClick={() => this.showto("基础和进阶")}>基础和进阶</Button> */}
                    <div className='middlestudy'>
                      <ul className='middlestudy2' style={{ textDecoration: "none", color: 'red', display: this.state.studyshow }}>
                        {
                          this.state.studylist.map((item) => {
                            return <li key={item._id} onClick={() => this.toshowitem(item.name)}>{item.name}</li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                {/* 仅中屏显示：搜索*/}
                <div className=' hidden-xs col-sm-5  hidden-md hidden-lg'>
                  <div className="input-group allcate">
                    <input type="text" className="form-control" aria-label="..." ref={this.searchinfo} />
                    <div className="input-group-btn">
                      <Button variant="primary" onClick={this.searchto}>go!</Button>
                      {/* <button type="button" class="btn btn-default" aria-label="Left Align">KK</button> */}
                    </div>
                  </div>
                </div>

                {/* 仅小屏显示：搜索栏*/}
                <div className=' col-md-4  col-xs-6 hidden-lg hidden-md hidden-sm'>
                  <div className="input-group allcate">
                    <input type="text" className="form-control" aria-label="..." ref={this.searchinfo} />
                    <div className="input-group-btn">
                      <Button variant="primary" onClick={this.searchto}>go!</Button>
                      {/* <button type="button" class="btn btn-default" aria-label="Left Align">KK</button> */}
                    </div>
                  </div>
                </div>
                {/* 仅小屏显示：多览所有分类；点击显示具体类别以及头像*/}
                <div className=' col-md-4  col-xs-2 hidden-lg hidden-md hidden-sm paddingNone'>
                  <div className="">
                    <div className="row">
                      {/*null */}
                      <div className='col-xs-1 avater paddingNone'>
                      </div>
                      {/* 所有分类 */}
                      <div className='col-xs-3 allcate paddingNone'>
                        <button type="button" className="btn btn-default " aria-label="Left Align">
                          <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className='col-xs-1 avater paddingNone paddingLeft10'></div>
                      {/*  头像 */}
                      <div className='col-xs-5 avater paddingNone paddingNone'>
                        <Button variant="primary">
                          <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Button>
                      </div>
                      {/*null */}
                      <div className='col-xs-1 avater paddingNone'>
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
              <div className="input-group allcate">
                <input type="text" className="form-control" aria-label="..." ref={this.searchinfo} />
                <div className="input-group-btn">
                  <Button variant="primary" onClick={this.searchto}>go!</Button>
                  {/* <button type="button" class="btn btn-default" aria-label="Left Align">KK</button> */}
                </div>
              </div>

              {/* <div className="row">
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击5</Button>
                  </div>
                </div>
                {/* 大屏：按钮  
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击6</Button>
                  </div>
                </div>
                {/* 大屏：按钮  
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">点击7</Button>
                  </div>
                </div>
              </div> */}
            </div>

            {/* 右边------中屏和大屏显示：分类，使用懒加载  */}
            <div className="col-md-4 col-sm-3 hidden-xs header2">
              <div className="row">
                {/* 中屏:按钮 */}
                <div className=' hidden-xs col-sm-4  hidden-md hidden-lg '>
                  <div className="head111 allcate">
                    <Button variant="primary">框架</Button>
                  </div>
                </div>

                {/* 大屏：按钮 */}
                <div className=' hidden-xs col-sm-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary">前端框架</Button>
                  </div>
                </div>

                {/* 仅大屏：按钮与更多分类  */}
                <div className=' hidden-xs hidden-sm col-sm-6 paddingNone'>
                  <div className="row">
                  <div className='col-sm-1'></div>
                    <div className='col-sm-6'>
                      <div className="head111 allcate paddingNone">
                        <Button variant="primary">前端算法</Button>
                      </div>
                    </div>
                    {/* 更多分类  */}
                    <div className='col-sm-3 allcate paddingNone'>
                      <Button variant="primary">
                        <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                      </Button>   
                    </div>
                    <div className='col-sm-2'></div>
                  </div>
                </div>
                {/* 仅大屏：头像  */}
                <div className=' hidden-xs col-sm-2 hidden-sm paddingNone'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <div className="head111 avater">
                        <Button variant="primary">
                          <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Button>
                      </div>                      
                    </div>
                    <div className='col-sm-4'></div>
                  </div>
                </div>

                {/* 仅中屏：更多类 */}
                <div className=' hidden-xs col-sm-4  hidden-lg hidden-md'>
                  <div className="head111 avater">
                    <Button variant="primary">
                      <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </Button>
                  </div>
                </div>

                {/* 仅中屏：头像  */}
                <div className=' hidden-xs col-sm-4  hidden-lg hidden-md '>
                  <div className="head111 avater">
                    <Button variant="primary">
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
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