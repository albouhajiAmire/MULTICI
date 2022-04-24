import React, { useEffect, useState } from "react"
import ChatsList from "./chatsList";
import Chat from "./chat";
import "./chat.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { isAuthentication } from "../../redux/actions/auth";
import { connect, getOnlineFriends, joinAdminRoom } from "../../sockets/init";
import { get_chats_Count_nav, get_notifi_chats } from "../../redux/actions/chat"

const Chats = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch])

  useEffect(() => {

    if (!isAuth) {
      navigate("/login")
    }

  }, [isAuth])

  const params = useParams();
  const View = params.v

  const [onlineUsers, setOnlineUsers] = useState({})
  const [chatId, setChatId] = useState({})
  const socket = props.socket

  useEffect(() => {
     setChatId(params.id)
  }, [params])

  useEffect(() => {
    connect(socket);
    joinAdminRoom(socket)
    getOnlineFriends(socket)

    socket.on("onlineFriends", online => {
      setOnlineUsers(online)
    }) 

  }, [socket])



  //notification =<>>>>>>
  const { token } = useSelector(state => state.auth)
  const { count_nav, notifi_chats } = useSelector(state => state.chat)

  const authorization = { "Authorization": `bearer ${token}` }

  useEffect(() => {
    if (token !== "") {
      dispatch(get_chats_Count_nav({ filter: '{"viewed" : {"$ne" :  true} }', sort: '{"_id" : -1}' }, authorization))
      dispatch(get_notifi_chats({ filter: '{"viewed" : {"$ne" :  true} }', sort: '{"_id" : -1}' }))
    }

  }, [dispatch])





  return (

    <div className="chat-admin">

      <p>{count_nav}</p>
      <hr/>
      <p>{ notifi_chats.map((n, ni) => {
        return (
          <span key={ni}>{n.fullname}</span>
        )
      })}</p>
      <hr/>
      <hr/>


      <div className="chat-list">
        <ChatsList id={chatId} onlineUsers={onlineUsers} socket={socket} />

        <Chat id={chatId} onlineUsers={onlineUsers} v={View} socket={socket}/>

      </div>
    </div>
  );
}
export default Chats;