// 引入UI容器
// import CountUI from '../../components/body/counter/count2'
// 引入createInsertperson
import { createInsertperson } from '../../redux/actions/person'
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'
class person extends Component {
  
  Insertperson = ()=>{
    //使用容器组件传递过来的Insertperson
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    const id = '002'
    const name = this.namenode.value
    const age = this.agenode.value
    this.props.personInto({id,name,age})
  }
  render() {
    return (
      <div>
        <input type="text" ref={c=>this.namenode=c}/>
        <input type="text" ref={c=>this.agenode=c}/>
        <button onClick={this.Insertperson}>加</button>
        <ul>
          {this.props.persons.map((item)=>{
            return (
              <li key={item.id}>
                {item.name}
                {item.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default connect(
  state => ({persons:state.person}),
  // action自动分发，自动调用dispatch()
  {
    personInto:createInsertperson
  }
)(person)