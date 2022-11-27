const mongoose =  require('mongoose')

const olxSchema = new mongoose.Schema({
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


const OlxBikeModel = mongoose.model("olxBikeModel", olxSchema)


module.exports = {OlxBikeModel}