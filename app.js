var express= require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});
app.get("/results",function(req,res){
var key=req.query.search;


var url ="http://www.omdbapi.com/?s="+ key +"&apikey=1dbbb7af";
request(url,function(error,response,body){
if(!error&&response.statusCode==200){
    // res.send(body);
    var data =JSON.parse(body);

    // res.send(results.Search[0].Title);
    res.render("results",{data:data});
    }
 else{
     res.send("Not Found");
 }   
});
}).listen(8080);