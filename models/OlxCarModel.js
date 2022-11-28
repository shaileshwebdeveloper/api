const mongoose =  require('mongoose')

const carSchema = new mongoose.Schema({
  id : {type : String},
   brand :  {type : String},
  year :  {type : String},
  driven :  {type : String},
  title : {type : String},
  description :  {type : String},
  price :  {type : String},
  image:  {type : String},
  state : {type : String},
  city :  {type : String},
  name :  {type : String},
  date :  {type : String},

})




const OlxCarModel = mongoose.model("olx-car", carSchema)


module.exports = {OlxCarModel}