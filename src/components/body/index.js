import React, { Component } from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'
import Count from '../../containers/count2'
import Person from '../../containers/person'
import Hooks from '../../components/hooks'
import Context from '../../components/hooks/context'
// import StudyInfo from '../../components/body/studyInfo'
import PureComponentTo from '../../components/hooks/_PureComponent'
export default class index extends Component {
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
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
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }
}
