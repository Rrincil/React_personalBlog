import React, { Component, Fragment } from 'react'
import Head from '../head/head'
import Body from '../body'
import Foot from '../foot'
import Comments from '../comments'
export default class index extends Component {
  render() {
    return (
      <>
        <Head></Head>
        <Body></Body>
        <Comments></Comments>
        <Foot></Foot>
      </>
    )
  }
}
