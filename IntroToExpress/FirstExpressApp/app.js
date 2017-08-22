var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("hi there");
});


app.get("/bye", function(req, res){
    res.send("goodbye");
});


app.get("/dog", function(req, res){
    console.log("someone made a request to /dog");
    res.send("meow");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("welcome to the " + subreddit + " subreddit");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("welcome to the comments page");
})


app.get("*", function(req, res) {
    res.send("youre a star");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});