"use strict";

class SocketConnection {
    constructor(io) {
        this.io = io;
    }

    setupIO() {
        this.io.on("connection", this.onConnected);
    }

    onConnected(socket) {
        console.log("client connected!");

        socket.on("disconnect", self.onDisconnect());
    }

    onDisconnect() {
        console.log("client disconnected!");
    }
}

module.exports = SocketConnection;
// Socket.io connection
// io.on("connection", function (socket) {
//     console.log("client connected!");
//     io.emit("news", {hello: "world"});
//     socket.on("other event", function (data) {
//         console.log(data);
//     });
//     socket.on("disconnect", function () {
//         console.log("client disconnected!");
//     });
// });
