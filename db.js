
require('dotenv').config()

let key = process.env.SECRET_KEY

const connection = mongoose.connect(`mongodb+srv://shai94:${key}@cluster0.4894vj1.mongodb.net/?retryWrites=true&w=majority`)


module.exports = {connection}