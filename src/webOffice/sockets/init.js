
 const connect = (socket) => {
  socket.on("connect", () => {
      console.log("connect");
  });
}


  const goOnline = (socket , id) => {
        socket.emit("goOnline", id);
  }


  const joinChat = (socket , data) => {
    socket.emit("joinChat", data); 
  }
 
 
  const joinAdminRoom = (socket) => {
      socket.emit("joinAdminRoom");
  }

  const getOnlineFriends = async (socket) => {
    socket.emit("getOnlineFriends");
  }




  
export {
    goOnline , getOnlineFriends , joinAdminRoom , joinChat  , connect
}