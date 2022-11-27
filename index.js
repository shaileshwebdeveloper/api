
const express =  require("express")
const { OlxBikeModel } = require("./models/OlxBikeModel")

require("dotenv").config()

const app =  express()

const PORT  = process.env.PORT || 3001


   app.get("/olx-bikes", async (req,res)=>{
    const users=await OlxBikeModel.find()
    res.send(users)
    
    })



app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("Connected to DB sucessfully..");
    } catch (err) {
      console.log("Error Connecting DB..");
    }
  });