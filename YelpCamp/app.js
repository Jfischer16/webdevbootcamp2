var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
     {name: "salmon creek", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
     {name: "granite hill", image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg"}, 
     {name: "mountain goats pass", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"} 
];

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect to campgrounds
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});