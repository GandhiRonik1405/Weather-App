const express = require('express');
const app=express();
const path = require('path')
const hbs = require('hbs')

// public static path
const static_path = path.join(__dirname,"../public");
const templet_path = path.join(__dirname,"../templets/views");
const partials_path = path.join(__dirname,"../templets/partials");

  
app.set('view engine','hbs');
app.set('views',templet_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render('index')
});

app.get("/about",(req,res)=>{
    res.render('about')
});

app.get("/weather",(req,res)=>{
    res.render('weather')
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errMsg:'Oops! Page Not Founds'
    })
});

app.listen(2000,()=>{
    console.log("listening to the 2000")
})
