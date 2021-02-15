const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000
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


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});