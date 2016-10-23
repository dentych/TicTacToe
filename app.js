var express = require("express");
var app = module.exports = express();
var server = require("http").Server(app);
var path = require("path");
var io = module.exports = require("socket.io")(server);

var sendOptions = {
    root: __dirname + "/public",
    dotfiles: "deny"
};

var module_path = path.join(__dirname, "node_modules");

app.use("/bootstrap", express.static(path.join(module_path, "bootstrap/dist")));
app.use("/jquery", express.static(path.join(module_path, "jquery/dist")));

app.get("/", function (req, res) {
    res.sendFile("index.html", sendOptions, function (err) {
        if (err) {
            res.status(err.status).end();
        }
    });
});

app.get("/play/:id", function (req, res) {
    res.sendFile("play.html", sendOptions, function (err) {
        if (err) {
            res.status(err.status).end();
        }
    });
});

var SocketConnection = require("./socket.js");

var con = new SocketConnection(io);
con.setupIO();

// Start server listening
server.listen(3000, function () {
    console.log("Listening on port 3000");
});
