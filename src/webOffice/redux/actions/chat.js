
import {  COUNT_CHAT_NAV, GET_CHAT, NEW_CHAT, NOTIFI_CHAT, VIEW_CHAT} from "../constans/chat"
import { SHOW_ERROR_MESSAGE, CLEAR_MESSAGE } from "../constans/message"
import { START_LOADING, STOP_LOADING } from "../constans/loading"
import {  List, View , Count } from "../../axios/service/chat"


const get_chats = (filter) => async dispatch => {

    dispatch({ type: START_LOADING })
    List(filter).then(({ data }) => {

        if (!data.err) {
            dispatch({ type: STOP_LOADING })
            dispatch({
                type: GET_CHAT , payload : data.msg
            })
            dispatch({ type: CLEAR_MESSAGE })
        } else {
            dispatch({ type: STOP_LOADING })
            dispatch({ type: SHOW_ERROR_MESSAGE, payload : data.msg })
        }

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
    })
}


const get_notifi_chats = (filter) => async dispatch => {

    dispatch({ type: START_LOADING })
    List(filter).then(({ data }) => {

        if (!data.err) {
            dispatch({ type: STOP_LOADING })
            dispatch({
                type: NOTIFI_CHAT , payload : data.msg
            })
            dispatch({ type: CLEAR_MESSAGE })
        } else {
            dispatch({ type: STOP_LOADING })
            dispatch({ type: SHOW_ERROR_MESSAGE, payload : data.msg })
        }

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
    })
}

const get_chats_Count_nav = (filter , con) => async dispatch => {
    dispatch({ type: START_LOADING })
    Count(filter , con).then(({ data }) => {

    if (!data.err) {
        dispatch({ type: STOP_LOADING })
        dispatch({
            type: COUNT_CHAT_NAV , payload : data.msg
        })
    } else {
        dispatch({ type: STOP_LOADING })
        dispatch({
            type: COUNT_CHAT_NAV , payload : -1
        })
    }

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })

    })
}

const view_chat = (id , con) => async dispatch => {
    dispatch({ type: START_LOADING })

    View(id , con).then(({ data }) => {

        if (!data.err) {
            dispatch({ type: STOP_LOADING })
            dispatch({
                type: VIEW_CHAT , payload : id
            })
            // dispatch({ type: CLEAR_MESSAGE})
        } else {
            dispatch({ type: STOP_LOADING })
            // dispatch({ type: SHOW_ERROR_MESSAGE, payload : data.msg })
        }
            
        }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
        // dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })

    })
}


const new_chat = (id) => async dispatch => {
        dispatch({ type: START_LOADING })
        dispatch({ type: NEW_CHAT , payload : id})
        dispatch({ type: STOP_LOADING })

}

export {
     get_chats , view_chat , get_chats_Count_nav , get_notifi_chats , new_chat
}

 