const express=require('express');
//const dotenv=require("dotenv").config();



const app=express();


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));
app.use("/",require("./routes/bookRoutes"));

const port=5001;


app.listen(port,()=>{
    console.log("server runing...");
    console.log(__dirname);
});


