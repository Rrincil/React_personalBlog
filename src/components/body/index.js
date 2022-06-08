import React, { Component } from 'react'
import './index.less'
import { Route } from 'react-router-dom'
import Home from './Home'
export default class index extends Component {
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
            <Route path='/Home' component={Home} />
          </div>
        </div>
      </div>
    )
  }
}
