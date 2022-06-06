import React, { Component } from 'react'
//import {}
import './index.less'
//import { Button,navtabs} from 'react-bootstrap'
export default class head extends Component {
  render() {
    return (
      // <Button variant="danger">点击</Button>
      // <Button variant="primary">点击</Button>
      // <Button variant="warning">点击</Button>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 header2">1</div>
            <div className="col-md-4  hidden-sm hidden-xs header2">2</div>
            <div className="col-md-4 col-sm-6 hidden-xs header2">3</div>
          </div>
        </div>
      </div>
    )
  }
}

