import {createStore} from "redux"

const store = createStore(function(state,action){
  if(action.type === "changeName"){
    console.log(action)
    return{
      ... state,
      user:{
        name:action.peyload
      }
    }
  }
  return state;
},{
  user:{
    name:"sev"
  }
})

export default store;