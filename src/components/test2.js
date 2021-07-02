import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'

function Test2(){

  const dispach = useDispatch()
  const name = useSelector(function(state){
    return state.user.name
  })

function myFunction(){
  console.log(name)
  dispach({
    type:"changeName",
    peyload:"karen"
  })
  
}

  return(
    <div>
      <button  onClick = {myFunction}>click me 2</button>
      <div>{name}</div>
    </div>
  )
}

export default Test2