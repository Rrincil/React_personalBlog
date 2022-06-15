import React, { Component,createContext,Consumer } from 'react'
const Mycontext = createContext()
const {Provider} = Mycontext
export default class A extends Component {
  state = {
    name:'kk'
  }
  render() {
    const {name} = this.state
    return (
      <div>
        <p>{name}</p>
        <Provider value={name}>
          <B></B>
        </Provider>
        
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div>
        <C/>
      </div>
    )
  }
}
class C extends Component {
  static contextType = Mycontext
  render() {
    return (
      <div>
        {console.log(this.context)}
        {/* <D></D> */}
      </div>
    )
  }
}
function D(){
  return(
    <>
      {/* <Consumer>
        {
          value=>{
            return <p>{value}</p>
          }
        }
      </Consumer>    */}
    </>
  )
}