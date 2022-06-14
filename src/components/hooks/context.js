import React, { Component,createContext,Consumer } from 'react'
const Mycontext = createContext()
export default class A extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
class C extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            value=>{
              console.log(value);
            }
          }
        </Consumer>
      </div>
    )
  }
}