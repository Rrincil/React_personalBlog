import React, { Component } from 'react'
//import {}
import './index.less'
//import middlestudyshow from './index.less'
// import  WithNavigation  from '../../pages/withNavigation'
import { Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
//import axios from 'axios'
import HeadtoStudy from './HeadToStudy/headtoStudy'
import { CSSTransition } from 'react-transition-group';
class head extends Component {
  searchinfo = React.createRef()
  state = {
    studyshow2: false,//框架
    studyshow: true,//基础和进阶
    studyshow3: false,//进阶知识
    studyshow4: false,//前端框架
    studyshow5: false,//前端算法
    hidetopic: true,
    inputwidth: false,
    showmask: true,
    showmask2: false,
    smallCateState: false,// 小屏分类
    studylist: [],
    isxs: false
  }
  componentDidMount() {
    const wigth = window.innerWidth
    // console.log(wigth);
    if (wigth <= 768) {
      this.setState({ isxs: true })
    }
    this.toHeadtoStudy()
  }
  tostudy = () => {
    const navigate = useNavigate();
    navigate(`/home`);
    // console.log(this.props);
    // this.props.history.push(`/home`,{id:'id'})
  }
  toHeadtoStudy = (data) => {
    this.setState({
      smallCateState: data,
      studyshow2: false,//框架
      studyshow: false,//基础和进阶
      studyshow3: false,//进阶知识
      studyshow4: false,//前端框架
      studyshow5: false,//前端算法         
    })
  }
  showto = (studyname) => {
    let a = [
      { _id: '001', name: 'HTML', age: 15 },
      { _id: '002', name: 'CSS3', age: 15 },
      { _id: '003', name: 'JS', age: 15 },
      { _id: '004', name: 'Markdown', age: 15 },
      { _id: '005', name: 'Sass', age: 15 }

    ]
    let AdvancedStudy = [
      { _id: '001', name: 'Jquery', age: 15 },
      { _id: '002', name: 'Vue', age: 15 },
      { _id: '003', name: 'NodeJs', age: 15 },
      { _id: '004', name: 'React', age: 15 }
    ]
    if (studyname === '框架') {
      this.setState({ studylist: AdvancedStudy })
      this.setState({ studyshow2: true })
      this.setState({ studyshow: false })

    } else if (studyname === '基础和进阶') {
      this.setState({ studylist: a })
      // this.setState({ studyshow: 'block' })
      this.setState({ studyshow: true })
      this.setState({ studyshow2: false })


    } else if (studyname === '进阶知识') {
      this.setState({ studylist: a })
      this.setState({ studyshow3: true })
      this.setState({ studyshow5: false })
      this.setState({ studyshow4: false })
    } else if (studyname === '前端框架') {
      this.setState({ studylist: AdvancedStudy })
      this.setState({ studyshow4: true })
      this.setState({ studyshow5: false })
      this.setState({ studyshow3: false })

    } else if (studyname === '前端算法') {
      this.setState({ studylist: a })
      this.setState({ studyshow5: true })
      this.setState({ studyshow4: false })
      this.setState({ studyshow3: false })

    }
    // axios.post(`api/allproduct/togetallmes`).then(res => {
    //   console.log('====================================');
    //   console.log(res);
    //   console.log('====================================');
    //   if (res.data) {
    //     a = res.data
    //     console.log(a);
    // this.setState({ studylist: a })
    // this.setState({ studyshow: 'block' })
    //   }

    // })
  }
  showsearchmask = () => {
    this.setState({ showmask2: true }, () => {
      console.log(this.state.showmask2)
    })
    this.setState({ hidetopic: 'none' })
    this.setState({ inputwidth: '100%' })
    // this.setState({ showmask: 'block' })

  }
  downto = (studyname) => {
    if (studyname === '框架') {
      this.setState({ studyshow2: false })
    } else if (studyname === '基础和进阶') {
      this.setState({ studyshow: false })
    } else if (studyname === '进阶知识') {
      this.setState({ studyshow3: false })
    } else if (studyname === '前端框架') {
      this.setState({ studyshow4: false })
    } else if (studyname === '前端算法') {
      this.setState({ studyshow5: false })
    }

  }
  toshowitem = (item) => {
  }

  //恢复搜索框大小，显示其他
  toshowtopic = () => {
    this.setState({ inputwidth: "41.66666667%" })
    this.setState({ hidetopic: 'block' })
    // this.setState({ showmask: 'none' })
    this.setState({ showmask2: false }, () => {
      console.log(this.state.showmask2)

    })
  }

  //搜索内容
  searchto = () => {
    // console.log(333);
    // this.setState({ showmask2: true })
    // const info = this.searchinfo.current.value

  }

  // 小屏分类
  smallCate = () => {
    let a = [
      { _id: '001', name: 'HTML', age: 15 },
      { _id: '002', name: 'CSS3', age: 15 },
      { _id: '003', name: 'JS', age: 15 },
      { _id: '005', name: 'Sass', age: 15 },
      { _id: '004', name: 'Markdown', age: 15 },
      { _id: '005', name: 'Jquery', age: 15 },
      { _id: '006', name: 'Vue', age: 15 },
      { _id: '007', name: 'NodeJs', age: 15 },
      { _id: '008', name: 'React', age: 15 }


    ]
    this.setState({ studylist: a })
    this.setState({ smallCateState: !this.state.smallCateState })

  }
  // 关闭小屏分类
  closesmallCate = () => {
    this.setState({ smallCateState: false })

  }
  //关闭其他
  closeOthers = () => {
    this.setState({
      studyshow2: false,//框架
      studyshow: false,//基础和进阶
      studyshow3: false,//进阶知识
      studyshow4: false,//前端框架
      studyshow5: false,//前端算法   
    })
  }
  scrollRrincil = ()=>{
    const heightTop = window.screenTop()
    console.log('====================================');
    console.log(heightTop);
    console.log('====================================');
  }

  // componentDidUpdate() {
  //   this.setState({ smallCateState: false })
  // }
  render() {
    const id = 'xx'
    window.scroll(this.scrollRrincil)
    // console.log(this.state.smallCateState);
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
                <div className='col-xs-4 Rincil ' style={{ display: this.state.hidetopic }} >
                  <div className="head111 Rincil">
                    <p>
                    <a href="https://github.com/Rrincil"> Rrincl’sBlog</a>
                    </p>
                    <p className='github'>欢迎关注：Rrincil的GitHub</p>
                  </div>
                </div>
                {/* 仅大屏显示：基础知识 */}
                <div className=' hidden-xs col-md-4 hidden-sm '>
                  <div className="head111 allcate">
                    {/* onClick={this.tostudy} */}
                    <Button variant="primary" >
                      <Link
                        style={{color:"red",textDecoration: "none"}}
                        to='/home/homepage'
                        state={{
                          id: id
                        }}
                      >首页</Link>                      
                    </Button>
                  </div>
                </div>
                {/* 仅中屏显示：分类 */}
                <div className=' hidden-xs col-sm-3  hidden-md hidden-lg'>
                  <div className="head222 allcate">

                    <Button variant="primary" onMouseEnter={() => this.showto("基础和进阶")} >基础和进阶</Button>
                    <CSSTransition
                      in={this.state.studyshow}
                      timeout={200}
                      classNames="alert"
                      unmountOnExit
                      // onEnter={() => this.setState({studyshow:false})}
                      onExited={() => this.setState({ studyshow: false })}
                    >
                      <div className='middlestudy'>
                        <ul className='middlestudy2' onMouseLeave={() => this.downto('基础和进阶')} >
                          {
                            this.state.studylist.map((item) => {
                              // console.log(item.name);
                              return <HeadtoStudy key={item._id} name={item.name} toshowcate={this.toHeadtoStudy} />
                            })
                          }
                        </ul>
                      </div>
                    </CSSTransition>
                  </div>
                </div>
                {/* 仅中屏显示：搜索*/}
                <div className=' hidden-xs col-sm-5  hidden-md hidden-lg'>
                  <div className="input-group allcate" >
                    <input type="text" className="form-control" aria-label="..." ref={this.searchinfo} onFocus={this.closeOthers} />
                    <div className="input-group-btn">
                      <Button variant="primary" onClick={this.searchto} >go!</Button>
                      {/* <button type="button" class="btn btn-default" aria-label="Left Align">KK</button> */}
                    </div>
                  </div>
                </div>

                { /* 仅小屏显示：搜索栏*/}
                <div className=' col-md-4  col-xs-5 hidden-lg hidden-md hidden-sm' style={{ width: this.state.inputwidth }}>
                  <div className="input-group allcate" >
                    <input type="text" className="form-control" aria-label="..." ref={this.searchinfo} onFocus={this.showsearchmask} onBlur={this.toshowtopic} />
                    <div className="input-group-btn">
                      <Button variant="primary" onClick={this.searchto}>go!</Button>
                      {/* <button type="button" class="btn btn-default" aria-label="Left Align">KK</button> */}
                    </div>
                  </div>
                </div>
                {/* 
                {
                  this.state.isxs ? ( */}
                {/* /* 显示搜索遮罩层 */}
                <CSSTransition
                  in={this.state.showmask2}
                  timeout={200}
                  classNames="alert"
                  unmountOnExit
                  onExited={() => this.setState({ showmask2: false })}
                >
                  {/* style={{ display: this.state.showmask }} */}
                  <ul className='mask' >
                    hbhbkjkjk
                    {/* {
                                this.state.studylist.map((item) => {
                                  return <HeadtoStudy key={item._id} name={item.name} />
                                })
                              } */}
                  </ul>
                </CSSTransition>
                {/* ) : (<></>)
                } */}

                { /* 仅小屏显示：多览所有分类；点击显示具体类别以及头像*/}
                <div className=' col-md-4  col-xs-3 hidden-lg hidden-md hidden-sm paddingNone' style={{ display: this.state.hidetopic }}>
                  <div className="">
                    <div className="row">
                      {/*null */}
                      <div className='col-xs-1 avater paddingNone'>
                      </div>
                      {/* 所有分类 */}
                      <div className='col-xs-3 allcate paddingNone'>
                        <button type="button" className="btn btn-default " aria-label="Left Align" onClick={this.smallCate}>
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

                  {/* /* 显示小屏分类 */}
                  <CSSTransition
                    in={this.state.smallCateState}
                    timeout={200}
                    classNames="smallcatemovie"
                    unmountOnExit
                  // onEnter={() => this.setState({smallCateState:false})}
                  // onExited={() => this.setState({smallCateState:false})}
                  >
                    <div style={{ width: '100%', height: 'auto' }}>
                      {/* <div className="smallCate" onClick={this.closesmallCate}>

                          </div> */}
                      {/* style={{ display: this.state.showmask }} */}
                      <ul className='smallCate2' style={{ display: this.state.showmask }}>
                        {
                          this.state.studylist.map((item) => {
                            return(
                              <div className="smallcate3">
                                <HeadtoStudy key={item._id} name={item.name} toshowcate={this.toHeadtoStudy} />
                              </div>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </CSSTransition>

                  <CSSTransition
                    in={this.state.smallCateState}
                    timeout={200}
                    classNames="smallcatemovie2"
                    unmountOnExit
                  // onEnter={() => this.setState({smallCateState:false})}
                  // onExited={() => this.setState({smallCateState:false})}
                  >
                    <div style={{ width: '100%', height: 'auto' }}>
                      <div className="smallCate" onClick={this.closesmallCate}>
                      </div>
                    </div>
                  </CSSTransition>

                </div>


                {/* 仅大屏显示：进阶知识  */}
                <div className='col-sm-4 hidden-xs hidden-sm col-md-4'>
                  <div className="head111 allcate">
                    <Button variant="primary" onMouseEnter={() => this.showto('进阶知识')} >进阶知识</Button>
                    <CSSTransition
                      in={this.state.studyshow3}
                      timeout={200}
                      classNames="smallcatemovie2"
                      unmountOnExit
                    // onEnter={() => this.setState({smallCateState:false})}
                    // onExited={() => this.setState({smallCateState:false})}
                    >
                      <div className='advancedKnowledge'>
                        <ul className='advancedKnowledge2' onMouseLeave={() => this.downto('进阶知识')} >
                          {
                            this.state.studylist.map((item) => {
                              return <HeadtoStudy key={item._id} name={item.name} toshowcate={this.toHeadtoStudy} />
                            })
                          }
                        </ul>
                      </div>
                    </CSSTransition>
                  </div>
                </div>
              </div>
            </div>

            {/*中间------ 仅大屏显示：搜索，使用懒加载  */}
            <div className="col-md-4  hidden-sm hidden-xs header2">
              <div className="input-group allcate">
                <input type="text" className="form-control" aria-label="..." ref={this.searchinfo} onFocus={this.closeOthers} />
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
                    <Button variant="primary" onMouseEnter={() => this.showto("框架")} >框架</Button>
                    <CSSTransition
                      in={this.state.studyshow2}
                      timeout={200}
                      classNames="smallcatemovie2"
                      unmountOnExit
                      onExited={() => this.setState({studyshow2:false})}
                    >
                      <div className='middlestudyframe'>
                        <ul className='middlestudy2' onMouseLeave={() => this.downto('框架')} >
                          {
                            this.state.studylist.map((item) => {
                              return <HeadtoStudy key={item._id} name={item.name} toshowcate={this.toHeadtoStudy} />
                            })
                          }
                        </ul>
                      </div>
                    </CSSTransition>
                  </div>

                </div>

                {/* 大屏：按钮 */}
                <div className=' hidden-xs col-sm-4 hidden-sm '>
                  <div className="head111 allcate">
                    <Button variant="primary" onMouseEnter={() => this.showto("前端框架")} >前端框架</Button>
                    <CSSTransition
                      in={this.state.studyshow4}
                      timeout={200}
                      classNames="smallcatemovie2"
                      unmountOnExit
                    >
                      <div className='frontEndFramework'>
                        <ul className='frontEndFramework2' onMouseLeave={() => this.downto('前端框架')}>
                          {
                            this.state.studylist.map((item) => {
                              return <HeadtoStudy key={item._id} name={item.name} toshowcate={this.toHeadtoStudy} />
                            })
                          }
                        </ul>
                      </div>
                    </CSSTransition>
                  </div>
                </div>

                {/* 仅大屏：按钮与更多分类  */}
                <div className=' hidden-xs hidden-sm col-sm-6 paddingNone'>
                  <div className="row">
                    <div className='col-sm-1'></div>
                    <div className='col-sm-6'>
                      <div className="head111 allcate paddingNone">
                        <Button variant="primary" onMouseEnter={() => this.showto("前端算法")}>前端算法</Button>
                        <CSSTransition
                          in={this.state.studyshow5}
                          timeout={200}
                          classNames="smallcatemovie2"
                          unmountOnExit
                        >
                          <div className='frontEndAlgorithm'>
                            <ul className='frontEndAlgorithm2' onMouseLeave={() => this.downto('前端算法')}>
                              {
                                this.state.studylist.map((item) => {
                                  return <HeadtoStudy key={item._id} name={item.name} toshowcate={this.toHeadtoStudy} />
                                })
                              }
                            </ul>
                          </div>
                        </CSSTransition>
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