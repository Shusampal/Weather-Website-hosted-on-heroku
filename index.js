const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { request } = require('http');
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname, '/static')));

app.get("/",(req,res)=>{
    res.render('index');
    
});


app.get("/weather",(req,res)=>{ 
    res.render('weather');
});


app.get("/*",(req,res)=>{
    res.status(404).render('404');
    
});


app.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to port 8000");
});