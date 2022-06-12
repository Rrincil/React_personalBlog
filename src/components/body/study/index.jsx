import React from 'react'
import { useParams,useMatch,useSearchParams,useLocation} from 'react-router-dom'
export default function Index() {
  const {state:{id}} = useLocation();
  return (
    <div>
      {/* <button onClick={()=>setsearch('id="我变了"')}>改变Search参数</button> */}
      study
      {id}
    </div>
  )
}
