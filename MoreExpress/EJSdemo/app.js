var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
            {title: "post 1", author: "suzy"},
            {title: "cat", author: "matt"},
            {title: "the eclipse was cool", author: "jack"},
        ];
        
        res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});