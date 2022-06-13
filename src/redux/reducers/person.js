import { INSERTPERSON } from "../constant";
const initstate = [{id:'001',name:'tom',age:19}]
export default function personreducer(prestate=initstate,action){
  const {data,type} = action
  switch (type) {
    case INSERTPERSON:
      return [data,...prestate]
    default:
      return prestate
  }
}