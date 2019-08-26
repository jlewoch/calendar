function initSocket(__bool) {
  if (__bool) {
    if (!socket) {
      socket = io.connect('http://xxx.xxx.xxx.xxx:8081', { secure: false });
      socket.on('connect', function() {
        console.log('connected');
      });
      socket.on('disconnect', function() {
        console.log('disconnected');
      });
    } else {
      socket.socket.connect(); // Yep, socket.socket ( 2 times )
    }
  } else {
    socket.disconnect();
  }
}
