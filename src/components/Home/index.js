import React, { Component, Fragment } from 'react'
import Head from '../head/head'
import Body from '../body'
import Foot from '../foot'
export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Head></Head>
        <Body></Body>
        <Foot></Foot>
      </Fragment>
    )
  }
}
