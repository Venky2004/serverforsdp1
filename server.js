const express =require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv=require("dotenv");
const routesurls = require('./routes/routes');
const cors = require('cors');


dotenv.config()

mongoose.connect(`mongodb+srv://Venky:Venky@cluster0.b3o67y4.mongodb.net/AAS?retryWrites=true&w=majority`,()=>{
    console.log("Database Connected!!")
})

app.use(express.json())
app.use(cors());
app.use('/api',routesurls);
app.listen(2000,()=>{console.log("Server Started on 2000")})