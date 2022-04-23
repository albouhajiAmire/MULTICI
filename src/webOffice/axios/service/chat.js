import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoint"

const config = {
    headers : {
       "Content-Type" : "application/json" 
    }  
}

  const View = async (id , con ) => {
    return  await  axios.put(`${Host.BACKEND}${ApiEndpoints.ChatEndpoints.route}${ApiEndpoints.ChatEndpoints.view}/${id}`, {}, { headers : {...config.headers , ...con } } )
  }

  const Count = async (filter , con ) => {
    return  await  axios.get(`${Host.BACKEND}${ApiEndpoints.ChatEndpoints.route}${ApiEndpoints.ChatEndpoints.count}`, { headers : {...config.headers , ...con } , params : {...filter} } )
  }
  
  const List = async (filter , con ) => {
    return  await  axios.get(`${Host.BACKEND}${ApiEndpoints.ChatEndpoints.route}${ApiEndpoints.ChatEndpoints.list}`, { headers : {...config.headers , ...con } , params : {...filter} } )
  }
  

const Join = async (data) => {
    return  await  axios.post(`${Host.BACKEND}${ApiEndpoints.ChatEndpoints.route}${ApiEndpoints.ChatEndpoints.create}` 
    , data , { headers :  {...config.headers ,} })
} 
  

  
export {
      Join , List , Count , View
}