const express=require("express");
const cors=require("cors");
const {connection} =require("./config/db");
// routes call 
const BlogRouter = require("./routes/Blog.routes")
// function call express
const app=express();

//cors using for credentials to get the crud methos as frontend as well

app.use(
    cors({
      origin: "*",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );



app.use(express.json());

// all api routes start point router are here 
app.use("/blogs", BlogRouter);

// function call body parser 
app.get("/about",(req,res)=>{
    res.send("AboutPage");
})

// listening to the server using async await method check the connnection from the server it is present or not ?

app.listen(8001,async()=>{
    try{
        await connection
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Connection failed");
        console.log(err);
    }
    console.log("Listening to Port 8001");
})