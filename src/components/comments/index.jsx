import React from 'react'
import './index.less'
import { useRef,useState } from 'react'
import { Button } from 'react-bootstrap'
export default function Comments() {
  const [CommentsState,usecomments] = useState([])
  const Comments = useRef()
  const [id,useid] = useState(0)
  function writeComments(){
    useid(id+1)
    console.log('====================================');
    console.log(Comments.current.value);
    const a = {id:id,name:Comments.current.value}
    console.log('====================================');
    usecomments([a,...CommentsState])
    console.log(CommentsState);
  }
  return (
    <div className='Comments'>
      <div className="container">
        <div className="row">
          <div className='CommentsState'>
          {
            CommentsState.map((item)=>{
              if(CommentsState.length != 0){
                return <p key={item.id}>{item.name}</p>
              }
            })  
          }
          {/* {Comments.current.value} */}
          </div>
          <div className="toComments">
            <input type="text" ref={Comments} />   
            <Button variant="primary" onClick={writeComments}>评论</Button>            
          </div>
        </div>
      </div>
    </div>
  )
}
