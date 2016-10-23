var express = require("express");
var path = require("path");
var app = express();

var sendOptions = {
    root: __dirname + "/public",
    dotfiles: "deny"
};

app.use("/bootstrap", express.static(path.join(__dirname, "node_modules", "bootstrap/dist")));

app.get("/", function(req, res) {
    res.sendFile("index.html", sendOptions, function(err) {
        if (err) {
            res.status(err.status).end();
        }
    });
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});