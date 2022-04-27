import React, { Fragment, useEffect, useState } from "react";
import { Join } from "../../axios/service/chat";
import { Create, List } from "../../axios/service/message";
import { Create as CreateFile } from "../../axios/service/file";
import { getCookie, setCookie } from "../../shared/cookie";
import moment from "moment";
import "./chatbox.css";
import { fileDownload, fileView } from "../../shared/funs";
import { connect, goOnline, joinChat } from "../../sockets/init";
import { sendMessage as sendMsg } from "../../sockets/message";
import { toast } from "react-toastify";

const ChatBox = (props) => {
  const [joinUser, setJoinUser] = useState({
    fullname: "",
    email: "",
    phone: "",
  });
  const [joinError, setJoinError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ChatId =
    getCookie("chatId") && getCookie("chatId") !== ""
      ? getCookie("chatId")
      : false;

  const socket = props.socket;

  useEffect(() => {
    if (ChatId) {
      connect(socket);
      goOnline(socket, ChatId);
      joinChat(socket, ChatId);
      setLoading(true);
      List({ filter: JSON.stringify({ chatId: ChatId }) })
        .then(({ data }) => {
          if (!data.err) {
            setMessages(data.msg);
            setLoading(false);
            // toast.success("Bienvenue pour discuter");
          } else {
            setLoading(false);
            // toast.error(data.msg);
          }
        })
        .catch((err) => {
          console.log("get orders api err ", err);
          setLoading(false);
          toast.error("Oooh!!quelque chose s'est mal passé!!");
        });
    }
  }, [ChatId]);

  useEffect(() => {
    socket.on("newMessage", (data) => {
      if (data.from === "admin") {
        setMessages([...messages, data]);
      }
    });
  }, [socket, messages]);

  const ValidateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleJoinTyping = (e) => {
    setJoinUser({ ...joinUser, [e.target.name]: e.target.value });

    if (e.target.name === "fullname") {
      if (!e.target.value) setJoinError("fullname is required");
      else if (e.target.value.length < 2)
        setJoinError("please enter your correct name");
      else setJoinError("");
    } else if (e.target.name === "phone") {
      if (!e.target.value) setJoinError("phone is required");
      else if (e.target.value.length < 2)
        setJoinError("please enter your correct phone number");
      else setJoinError("");
    } else if (e.target.name === "email") {
      if (e.target.value.length < 2) setJoinError("email is required");
      else if (!ValidateEmail(e.target.value))
        setJoinError("please enter your correct email");
      else setJoinError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (joinError === "") {
      const data = { ...joinUser };
      setLoading(true);
      Join(data)
        .then(({ data }) => {
          if (!data.err) {
            setCookie("chatId", data.msg);

            goOnline(socket, data.msg);
            joinChat(socket, data.msg);

            setLoading(false);
            toast.success("Bienvenue pour discuter");
          } else {
            setLoading(false);
            toast.error(data.msg);
          }
        })
        .catch((err) => {
          console.log("get orders api err ", err);
          setLoading(false);
          toast.error("Oooh!!quelque chose s'est mal passé!!");
        });
    }
  };

  const sendMessage = () => {
    if (message != "") {
      const data = { msg: message, chatId: ChatId, type: "msg", from: "user" };
      setLoading(true);
      Create(data)
        .then(({ data }) => {
          if (!data.err) {
            setMessages([
              ...messages,
              { msg: message, chatId: ChatId, type: "msg", from: "user" },
            ]);
            sendMsg(
              socket,
              { msg: message, chatId: ChatId, type: "msg", from: "user" },
              () => {
                setMessage("");
                setLoading(false);
                // toast.success("Message Envoyez");
              }
            );
          } else {
            setLoading(false);
            toast.error(data.msg);
          }
        })
        .catch((err) => {
          console.log("get orders api err ", err);
          setLoading(false);
          toast.error("Oooh!!quelque chose s'est mal passé!!");
        });
    }
  };

  const sendFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];

      //return
      const formData = new FormData();
      formData.append("image", img);

      setLoading(true);

      CreateFile(formData)
        .then(({ data }) => {
          if (!data.err) {
            Create({ fileId: data.msg, chatId: ChatId, type: "file" })
              .then(({ data }) => {
                if (!data.err) {
                  setMessages([
                    ...messages,
                    {
                      fileId: data.msg,
                      chatId: ChatId,
                      type: "file",
                      from: "user",
                    },
                  ]);
                  setLoading(false);

                  sendMsg(
                    socket,
                    {
                      fileId: data.msg,
                      chatId: ChatId,
                      type: "file",
                      from: "user",
                    },
                    () => {
                      setMessage("");
                    }
                  );
                } else {
                  setLoading(false);
                  toast.error("Oooh!!quelque chose s'est mal passé!!");
                }
              })
              .catch((err) => {
                console.log("get orders api err ", err);
                setLoading(false);
                toast.error("Oooh!!quelque chose s'est mal passé!!");
              });
          } else {
            setLoading(false);
            // toast.error("Oooh!!quelque chose s'est mal passé!!");
          }
        })
        .catch((err) => {
          console.log("get orders api err ", err);
          setLoading(false);
          toast.error("Oooh!!quelque chose s'est mal passé!!");
        });
    }
  };

  //Toggle chat and links
  const toggleChatBox = () => {
    document
      .querySelector("#toggle-chat-box > i")
      .classList.toggle("fa-comment");
    document.querySelector("#toggle-chat-box > i").classList.toggle("fa-xmark");
    document
      .querySelector("#toggle-chat-box > i")
      .classList.toggle("is-active");
    document.querySelector("#toggle-chat-box").classList.toggle("is-float");
    document.querySelector(".chat").classList.toggle("is-visible");
  };

  const downloadFile = (fileId) => {
    const a = document.createElement("a");
    a.href = fileDownload(fileId);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const viewFile = (fileId) => {
    const a = document.createElement("a");
    a.href = fileView(fileId);
    a.target = "__blanck";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleFileButton = (e) => {
    e.target.classList.toggle("active");
  };

  const cancelFileButton = (e) => {
    e.target.parentElement.previousSibling.classList.remove("active");
  };

  return (
    <div className="chatbox">
      <div className="fabs">
        {loading && "loading..."}
        <div className="chat">
          <div className="chat_header">
            <div className="chat_option">
              <div className="header_img">
                <img
                  src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                  alt=""
                />
              </div>
              <span id="chat_head">Jane Doe</span> <br />{" "}
              <span className="agent">Agent</span>{" "}
              <span className="online">(Online)</span>
              <span
                id="chat_fullscreen_loader"
                className="chat_fullscreen_loader"
              >
                <i className="fullscreen zmdi zmdi-window-maximize"></i>
              </span>
            </div>
          </div>

          <div className="chat_body chat_login">
            <p>
              Nous simplifions et facilitons la communication entre les
              entreprises et les particuliers l'un à l'autre. Demandez-nous
              n'importe quoi
            </p>
          </div>

          <div className="chat_converse chat_form">
            {!ChatId && (
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                    alt=""
                  />
                </div>
                rejoindre pour envoyer un message à l'agent.
                <div>
                  <form
                    className="message_form"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <input
                      placeholder="your fullname"
                      name="fullname"
                      onChange={(e) => handleJoinTyping(e)}
                    />
                    <input
                      placeholder="your phone number"
                      name="phone"
                      onChange={(e) => handleJoinTyping(e)}
                    />
                    <input
                      placeholder="Your email"
                      name="email"
                      onChange={(e) => handleJoinTyping(e)}
                    />
                    <button type="submit" disabled={loading}>
                      Envoyez
                    </button>
                    <small>{joinError}</small>
                  </form>
                </div>
              </span>
            )}

            {messages &&
              messages.length > 0 &&
              messages.map((msg, mi) => {
                return msg.from == "user" ? (
                  msg.type == "msg" ? (
                    <Fragment key={mi}>
                      <span className="chat_msg_item chat_msg_item_user">
                        {msg.msg}
                      </span>
                      <span className="status">
                        {moment(msg.createdAt).fromNow()}
                      </span>
                    </Fragment>
                  ) : (
                    <Fragment key={mi}>
                      <div
                        style={{
                          position: "relative",
                          right: "0px",
                          top: "0px",
                          width: "100%",
                          minHeight: "100px",
                        }}
                      >
                        <span
                          className="chat_msg_item chat_msg_item_user fileButton clickable"
                          onClick={(e) => {
                            toggleFileButton(e);
                          }}
                        >
                          file...
                        </span>

                        <div className="fileButtons">
                          <div
                            className="view"
                            onClick={() => {
                              viewFile(msg.fileId);
                            }}
                          >
                            V
                          </div>
                          <div
                            className="download"
                            onClick={() => {
                              downloadFile(msg.fileId);
                            }}
                          >
                            D
                          </div>
                          <div
                            className="cancel"
                            onClick={(e) => {
                              cancelFileButton(e);
                            }}
                          >
                            C
                          </div>
                        </div>

                        <span className="status">
                          {moment(msg.createdAt).fromNow()}
                        </span>
                      </div>
                    </Fragment>
                  )
                ) : msg.type == "msg" ? (
                  <Fragment key={mi}>
                    <span className="chat_msg_item chat_msg_item_admin">
                      <div className="chat_avatar">
                        <img
                          src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                          alt=""
                        />
                      </div>
                      {msg.msg}
                    </span>
                  </Fragment>
                ) : (
                  <Fragment key={mi}>
                    <div
                      style={{
                        position: "relative",
                        right: "0px",
                        top: "0px",
                        width: "100%",
                        minHeight: "10px",
                      }}
                    >
                      <span
                        style={{ position: "relative" }}
                        className="chat_msg_item chat_msg_item_admin clickable fileButton"
                        onClick={(e) => {
                          toggleFileButton(e);
                        }}
                      >
                        <div className="chat_avatar">
                          <img
                            src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                            alt=""
                          />
                        </div>
                        file...
                      </span>

                      <div className="fileButtons">
                        <div
                          className="view admin"
                          onClick={() => {
                            viewFile(msg.fileId);
                          }}
                        >
                          V
                        </div>
                        <div
                          className="download admin"
                          onClick={() => {
                            downloadFile(msg.fileId);
                          }}
                        >
                          D
                        </div>
                        <div
                          className="cancel admin"
                          onClick={(e) => {
                            cancelFileButton(e);
                          }}
                        >
                          C
                        </div>
                      </div>
                      <span className="status left">
                        {moment(msg.createdAt).fromNow()}
                      </span>
                    </div>
                  </Fragment>
                );
              })}
          </div>

          {ChatId && (
            <div className="fab_field">
              <input
                type="file"
                id="fab_camera"
                onChange={(e) => {
                  sendFile(e);
                }}
                style={{ display: "none" }}
              />
              <label htmlFor="fab_camera" id="fab_camera" className="fab">
                <i className="fa-solid fa-camera"></i>
              </label>

              <a
                id="fab_send"
                disabled={loading}
                onClick={sendMessage}
                href="#test"
                className="fab"
              >
                <i className="fa-solid fa-message"></i>
              </a>

              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="chatSend"
                name="chat_message"
                placeholder="Send a message"
                className="chat_field chat_message"
                value={message}
              ></textarea>
            </div>
          )}
        </div>
        <a
          id="toggle-chat-box"
          href="#test"
          onClick={toggleChatBox}
          className="fab"
        >
          <i className="fa-solid fa-comment"></i>
        </a>
      </div>
    </div>
  );
};

export default ChatBox;
