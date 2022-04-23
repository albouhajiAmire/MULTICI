import React, { Fragment, useEffect, useState } from "react";
import { Create, List } from "../../axios/service/message";
import { Create as CreateFile} from "../../axios/service/file";
import moment from 'moment';
import { fileDownload, fileView } from "../../shared/funs";
import { useDispatch , useSelector} from "react-redux";
import { new_chat, view_chat } from "../../redux/actions/chat";
import {  sendMessage as sendMsg } from '../../sockets/message'
import { useLocation } from 'react-router-dom';

const Chat = (props) => {
   const ChatId = props.id 
   const View = props.v 
   const socket = props.socket

   const location = useLocation();


   const [stuff, setStuff] = useState({ successMsg: "", errorMsg: "", loading: false })
   const [message, setMessage] = useState("")
   const [messages, setMessages] = useState([])


   const dispatch = useDispatch();
   const {token } = useSelector(state => state.auth) 

   const authorization =  { "Authorization": `bearer ${token}` } 
     // const user = localStorage.getItem("user") ? getLocalStorage("user") : [{ _id: "" }]

  useEffect(() => {

    if(ChatId && ChatId != ""){
      
      List({ filter : JSON.stringify({chatId : ChatId}) }).then(({ data }) => {
        if (!data.err) {
         setMessages(data.msg)

          setStuff({ successMsg: "created", errorMsg: "", loading: false })

        } else {
          setStuff({ successMsg: "", errorMsg: data.err, loading: false })

        }
      }).catch(err => {
        console.log("get orders api err ", err);
        setStuff({ successMsg: "", errorMsg: "something went wrong", loading: false })
      })


    }


  }, [ChatId])

  useEffect(() => {

    if(messages && messages.length > 0 && View === "n"){
      dispatch(view_chat(ChatId, authorization))
    }

  }, [location])



  useEffect(() => {
    socket.on("newMessage", data => {
        if (data.from === "user") {

           dispatch(new_chat(data.chatId))

              console.log(ChatId);
             console.log(data.chatId);

           if (ChatId === data.chatId) {
              setMessages([...messages, data])
           }

        }
      })
  }, [socket , ChatId , messages])






  const sendMessage = () => {
    if (message != "") {

      setStuff({ ...stuff, loading: true })

      const data =  { msg : message , chatId : ChatId , type : "msg" , from : "admin"}

      Create(data).then(({ data }) => {
        if (!data.err) {
           setMessages([...messages , { msg : message , chatId : ChatId , type : "msg" , from : "admin"}])
           setStuff({ successMsg: "sent", errorMsg: "", loading: false })

          sendMsg(socket ,{ msg : message , chatId : ChatId , type : "msg" , from : "admin"}, () => {
            setMessage("")
          })

        } else {
          setStuff({ successMsg: "", errorMsg: data.err, loading: false })

        }
      }).catch(err => {
        console.log("get orders api err ", err);
        setStuff({ successMsg: "", errorMsg: "something went wrong", loading: false })
      })
    }
  }

  const sendFile = (e) => {

    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];

      //return
      const formData = new FormData();
      formData.append('image', img);
      setStuff({ ...stuff, loading: true })


      CreateFile(formData).then(({ data }) => {


        if (!data.err) {


          Create({ fileId : data.msg , chatId : ChatId , type : "file" , from : "admin" }).then(({ data }) => {

            if (!data.err) {
              setMessages([...messages , { fileId : data.msg , chatId : ChatId , type : "file" , from : "admin" }])
              setStuff({ successMsg: "sent", errorMsg: "", loading: false })

              sendMsg(socket ,{ fileId : data.msg , chatId : ChatId , type : "file" , from : "admin" }, () => {
                setMessage("")
              })
 
            } else {
              setStuff({ successMsg: "", errorMsg: data.err, loading: false })

            }

          }).catch(err => {
            console.log("get orders api err ", err);
            setStuff({ successMsg: "", errorMsg: "something went wrong", loading: false })
          })

        } else {
          setStuff({ successMsg: "", errorMsg: data.err, loading: false })


        }

      }).catch(err => {
        console.log("get orders api err ", err);
        setStuff({ successMsg: "", errorMsg: "something went wrong", loading: false })
      })


    }

  }






  const downloadFile = (fileId) => {
    const a = document.createElement('a')
    a.href = fileDownload(fileId)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)         
  } 

  const viewFile = (fileId) => {
    const a = document.createElement('a')
    a.href = fileView(fileId)
    a.target = "__blanck"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)         
  } 

  const toggleFileButton = (e , t) => {
    if(t === "admin")
    e.target.parentElement.parentElement.classList.toggle("active")
    else e.target.parentElement.classList.toggle("active")
  } 


  const cancelFileButton = (e) => {
    e.target.parentElement.previousSibling.classList.remove("active")
  } 

  return (

    <section className="chat">
    <div className="header-chat">
      <i className="icon fa fa-user-o" aria-hidden="true"></i>
      <p className="name">Megan Leib</p>
    </div>




    <div className="messages-chat">



     
      {messages && messages.length > 0 && 
         
         messages.map((msg , mi) => {
 
         
            return (
             msg.from == "admin" 
             ?
             msg.type == "msg" 
             ?
                <Fragment key={mi}>
                   <div className="message text-only">
                    <div className="response">
                      <p className="text">{msg.msg}</p>
                    </div>
                  </div>
              </Fragment>
           
             :
              <Fragment key={mi}>

                    <div style={{ position: "relative", right: "0px", top: "0px", width: "100%", minHeight: "10px" }}>

                      <div className="message text-only fileButton" >
                        <div className="response" >
                          <p onClick={(e) => { toggleFileButton(e ,"admin") }} className="text clickable">file...</p>
                        </div>
                      </div>

                      <div className="fileButtons">
                        <div className="view" onClick={() => { viewFile(msg.fileId) }}>V</div>
                        <div className="download" onClick={() => { downloadFile(msg.fileId) }}>D</div>
                        <div className="cancel" onClick={(e) => { cancelFileButton(e) }}>C</div>
                      </div>
                    </div>

              </Fragment>
           
             :
             msg.type == "msg" 
             ?
                <Fragment key={mi}>
                <div className="message">
                  <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                  {props.onlineUsers[ChatId] && <div className="online"></div>}  
                  </div>
                     <p className="text">{msg.msg}</p>
                  </div>
                <p className="time">{moment(msg.createdAt).fromNow()}</p>
              </Fragment>
           
             :

             <Fragment key={mi}>

             <div style={{ position: "relative", right: "0px", top: "0px", width: "100%", minHeight: "10px" }}>

                      <div className="message fileButton ">
                        <div className="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)" }}>
                        {props.onlineUsers[ChatId] && <div className="online"></div>}  
                        </div >
                        <p onClick={(e) => { toggleFileButton(e, "user") }} className="text clickable">file...</p>
                      </div>


                      <div className="fileButtons">
                        <div className="view admin" onClick={() => { viewFile(msg.fileId) }}>V</div>
                        <div className="download admin" onClick={() => { downloadFile(msg.fileId) }}>D</div>
                        <div className="cancel admin" onClick={(e) => { cancelFileButton(e) }}>C</div>
                      </div>

                        <p className="time">{moment(msg.createdAt).fromNow()}</p>

                    </div>

       </Fragment>
    
            )
          })
          
          }

      
      {/* <div className="message text-only">
        <div className="response">
          <p className="text"> When can we meet ?</p>
        </div>
      </div>
      <p className="response-time time"> 15h04</p> */}


      {/* <div className="message">
        <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
          <div className="online"></div>
        </div>
        <p className="text"> 9 pm at the bar if possible 😳</p>
      </div>
      <p className="time"> 15h09</p>

      
      <div className="message">
          <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
            <div className="online"></div>
          </div>
          <p className="text"> Hi, how are you ? </p>
        </div>

        <div className="message text-only">
          <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
        </div>

        <p className="time"> 14h58</p>


        <div className="message text-only">
          <div className="response">
            <p className="text"> Hey Megan ! It's been a while 😃</p>
          </div>
        </div>
        <div className="message text-only">
          <div className="response">
            <p className="text"> When can we meet ?</p>
          </div>
        </div>
    <p className="response-time time"> 15h04</p>*/}

        
     


    </div>



    <div className="footer-chat">
      <input id="upload-file" type="file" onChange={(e) => { sendFile(e) }} style={{display : "none"}}/>

      <label htmlFor="upload-file">
        <i className="icon fa-solid fa-camera clickable" style={{fontSize:"25pt"}} aria-hidden="true"></i>
      </label>


      <input onChange={(e) => { setMessage(e.target.value) }} type="text" className="write-message" placeholder="Type your message here" value={message}></input>
      <i onClick={sendMessage} className="icon send fa-solid fa-comment clickable" disabled={stuff.loading} aria-hidden="true"></i>
    </div>
  </section>
  );
};

export default Chat;
