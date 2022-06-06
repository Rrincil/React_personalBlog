import React, { Component } from 'react'
//import {}
import './index.less'
import { Button,navtabs} from 'react-bootstrap'
export default class head extends Component {
  render() {
    return (
      <div className="header">
        <Button variant="danger">点击</Button>
        <Button variant="primary">点击</Button>
        <Button variant="warning">点击</Button>
        <ul class="nav nav-tabs">
          ...
          <li role="presentation" class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              ...
            </ul>
          </li>
          ...
        </ul>     
      </div>
    )
  }
}

