const mongoose =  require('mongoose')

const mobileSchema = new mongoose.Schema({
  id : {type : String},
   brand :  {type : String},
  title : {type : String},
  description :  {type : String},
  price :  {type : String},
  image:  {type : String},
  state : {type : String},
  city :  {type : String},
  name :  {type : String},
  date :  {type : String},

})


const OlxMobileModel = mongoose.model("olxmobiles", mobileSchema)


module.exports = {OlxMobileModel}