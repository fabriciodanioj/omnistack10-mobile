import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.2:3333", {
  autoConnect: false
});

export const subscribeToNewDevs = subscribeFunction => {
  socket.on("new-dev", subscribeFunction);
};

export const connect = (latitude, longitude, techs) => {
  socket.io.opts.query = { latitude, longitude, techs };
  socket.connect();
};

export const disconnect = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};
