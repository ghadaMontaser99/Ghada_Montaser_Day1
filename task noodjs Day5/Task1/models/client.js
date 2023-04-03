const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName:{
    type: String
  },
  lasttName:{
    type: String
  },
  phoneNumber:{
    type: String
  },
  userName:{
    type: String,
    unique: true 
  }
})
//creteCollection
const Client = mongoose.model('client', ClientSchema);
module.exports = Client;
