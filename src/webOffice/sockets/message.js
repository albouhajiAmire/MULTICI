


  const sendMessage = (socket , data , cb) => {
    socket.emit("sendMessage", data , cb);
  }

  const newMessage = async (socket) => {
   return await socket.on("newMessage", data => data);
  }

  
export {
    sendMessage , newMessage
}