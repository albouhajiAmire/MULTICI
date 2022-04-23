import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoint"

const config = {
    headers : {
       "Content-Type" : "application/json" 
    }  
}


  
  const List = async (filter ) => {
    return  await  axios.get(`${Host.BACKEND}${ApiEndpoints.MessageEndpoints.route}${ApiEndpoints.MessageEndpoints.list}`, { headers : {...config.headers  } , params : {...filter} } )
  }
  

const Create = async (data) => {
    return  await  axios.post(`${Host.BACKEND}${ApiEndpoints.MessageEndpoints.route}${ApiEndpoints.MessageEndpoints.create}` 
    , data , { headers :  {...config.headers} })
} 
  

  
export {
    Create , List

}