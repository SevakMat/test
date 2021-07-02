import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'

function Test(){

  const dispach = useDispatch()
  const name = useSelector(function(state){
    return state.user.name
  })

function myFunction(){
  console.log(name)
  dispach({
    type:"changeName",
    peyload:"armen"
  })
  
}

  return(
    <div>
      <button  onClick = {myFunction}>click me 1</button>
      <div>{name}</div>
    </div>
  )
}

export default Test