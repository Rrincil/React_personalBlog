import React, { Component } from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'
import Count from '../../containers/count2'
export default class index extends Component {
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
            {/* <Count store={store}/> */}
            <Count/>
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
