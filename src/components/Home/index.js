import React, { Component } from 'react'
import Head from '../head/head'
import Body from '../body'
import Foot from '../foot'
export default class index extends Component {
  render() {
    return (
      <div>
        <Head></Head>
        <Body></Body>
        <Foot></Foot>
      </div>
    )
  }
}
