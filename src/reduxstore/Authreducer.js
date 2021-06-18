function Authreducer(state={
isloggedin:localStorage.token?true:false,
token:localStorage.token,
username:localStorage.username
},action){
    switch(action.type){
        // case "LOGIN":{
        //     state={...state}
        //     state["token"]=action.payload?.token
        //     state["username"]=action.payload?.username
        //     state["isloggedin"] = true
        //     // alert(state["username"])
        //     return state
        // }
        // case "LOGOUT":{
        //     state={...state}
        //     localStorage.clear()
        //     state.isloggedin=false
        //     state.username = undefined
        //     return state
        // }
        case "LOGIN_STARTED" :{
            state = {...state}
            state["isloading"]  = true
            return state
        }
        case "LOGIN_SUCCESS" :{
          state = {...state}
          state["token"] = action.payload?.token
          state["isloading"] = false
          state.isloggedin = true
          state.username = action.payload?.username
          return state
        }
        case "LOGIN_FAIL" :{
            state = {...state}
            state["isloading"] = false
            return state
        }
        case"LOGOUT" :{
            state = {...state}
            localStorage.clear()
            state.isloggedin = false
            state.username = undefined
            return state
            
        }
        default:return state
    }
}
export default Authreducer