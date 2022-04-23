import {LOGOUT , TOKEN , ME , ISAUTH} from "../constans/auth"
import Jwt_decode from "jwt-decode"

const INITIAL_STATE = {
    token : "" ,
    user : {} ,
    isAuth : false ,
}

const authReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case TOKEN : 
        return {
            ...state ,
            token : action.payload
        }
        case ME : 
        return {
            ...state ,
            user : action.payload ,
            isAuth : true
        } 
        case LOGOUT : 
        return {
            token : "" ,
            user : {} ,
            isAuth : false ,
        }

        case ISAUTH : 
        let auth = {}


            if (state.user && state.token !== "") {
                if((new Date()/1000) < Jwt_decode(state.token).exp){
                    auth = {
                        ...state ,
                        isAuth : true ,
                    }
                }else {
                    auth = {
                        token : "" ,
                        user : {} ,
                        isAuth : false ,
                    }
                }
                  
            }else {
                auth = {
                    token : "" ,
                    user : {} ,
                    isAuth : false ,
                }
            }
    
        return { ...auth}

        default : return state
    }
}

export default authReducer