import React, { Component } from 'react'

export default class son extends Component {
  state ={
    gg:'dd'   /* 字符串map会出错 */
    // gg :[
    //   {id:'01',name:'tom'}
    // ]
  }
  render() {
    return (
      <div>son
        {
          this.state.gg.map(item=>{
            return <p>{item.name}</p>
          })
        }
      </div>
    )
  }
}
