import React, { useEffect, useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import { Link } from "react-router-dom"
import myClassName from "classnames"
import { get_chats } from "../../redux/actions/chat"
import moment from 'moment';


const ChatsList = (props) => {

     const [querySearch , setQuerySearch] = useState("")
     const ChatId = props.id 

     const dispatch = useDispatch()

    const { loading } = useSelector(state => state.loading)
    const { chats } = useSelector(state => state.chat)

    useEffect(() => {
        dispatch(get_chats({ filter: '{"firstname" : { "$ne": "xxxlxxx" }}', sort: '{"_id" : -1}' }))

    }, [dispatch])




   const handleSearch = () => {
     if(querySearch != ""){
        dispatch(get_chats({ filter: JSON.stringify({fullname: { "$regex": querySearch, "$options": "i" } }), sort: '{"updatedAt" : -1}' }))
      }
   }

    return (
      

        <section className="discussions">

          {loading && <div>loading...</div>}

        <div className="discussion search">
          <div className="searchbar">
            <i className="fa fa-search" aria-hidden="true" onClick={handleSearch}></i>
            <input onChange={(e) => setQuerySearch(e.target.value)} type="text" placeholder="Search..."></input>
          </div>
        </div>

        <div className="discussions-scroller">

          {chats && chats.length > 0 &&

            chats.map((chat, ci) => {
              return (
                <Link key={ci}  to={`/chat/${chat._id}/${chat.viewed ? "y" : "n"}`}> 

                <div className={myClassName("discussion" , {"message-active" : chat._id == ChatId })}>
                  
                      <div className="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)" }}>
                        {props.onlineUsers[chat._id] && <div className="online"></div>}  
                        </div>
                        <div className="desc-contact">
                          <p className="name">{chat.fullname}</p>
                          <p className="message">{chat.viewed ? "reed" : "new message"}</p>
                        </div>
                        <div className="timer">{moment(chat.updatedAt).fromNow()}</div>
                  
 
                      </div>

              </Link>
              )
            })
          }
                       

     </div>

      </section>
    );
}
export default ChatsList;