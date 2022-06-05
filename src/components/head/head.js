import React, { Component } from 'react'
//import {}
import { Button} from 'react-bootstrap'
export default class head extends Component {
  render() {
    return (
      <div>
        <Button variant="danger">点击</Button>
        <Button variant="primary">点击</Button>
        <Button variant="warning">点击</Button>
        {/* <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>        */}
      </div>
    )
  }
}

