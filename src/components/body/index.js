import React, { Component } from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'
//import Count from '../../containers/count2'
//import Person from '../../containers/person'
//import Hooks from '../../components/hooks'
//import { Button, navtabs } from 'react-bootstrap'
//import Context from '../../components/hooks/context'
// import StudyInfo from '../../components/body/studyInfo'
//import PureComponentTo from '../../components/hooks/_PureComponent'
export default class index extends Component {

  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
            {/* <div className='col-lg-8'> */}
            <Outlet/>
            {/* </div> */}
            {/* <div className='col-lg-4'></div> */}
            {/* <div className='col-lg-2' >
              <div className="row">
                <div className="biaoqian">
                  xxxxxx
                </div>
              </div>
            </div> */}
            {/* <PureComponentTo/> */}
            {/* <StudyInfo/> */}
            {/* <Context/> */}
            {/* <Hooks/> */}
            {/* <Count store={store}/> */}
            {/* <Person/> */}
            {/* <br/> */}
            {/* <Count/> */}
            {/* <Routes>
              <Route path='/home' element={<Home/>} />
            </Routes> */}
          </div>
        </div>
      </div>
    )
  }
}
