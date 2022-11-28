
const express =  require("express")
const { OlxBikeModel } = require("./models/OlxBikeModel")
const { OlxMobileModel } = require("./models/OlxMobileModel")
const { OlxCarModel } = require("./models/OlxCarModel");

const {connection} = require("./config/db");

require("dotenv").config()

const cors = require("cors");



const app =  express()

app.use(express.json());
app.use(cors());

const PORT  = process.env.PORT || 3001


   app.get("/olx-bikes", async (req,res)=>{
    const bikes = await OlxBikeModel.find()
    res.send(bikes)
    
    })


    app.get("/olx-cars", async (req,res)=>{
        const car = await OlxCarModel.find()
        console.log(car)
        res.send(car)
        
    })


    app.get("/olx-mobile", async (req,res)=>{
        const mobile = await OlxMobileModel.find()
        console.log(mobile)
        res.send("HELLO")
        
    })





    app.get("/", async (req,res)=>{

        res.send("connected")
        
    })




app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Connected to DB sucessfully..");
    } catch (err) {
      console.log("Error Connecting DB..", err);
    }
  });