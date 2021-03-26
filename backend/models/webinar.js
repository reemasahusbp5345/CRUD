const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebinarSchema = new Schema({
  title: {
    type: String,
    unique:true,
    minlength:3
  } ,
  description: {
    type: String,
    unique:true,
  } ,
  date: {
    type: String,
  } ,
  time: {
    type: String,
  } ,
  cost: {
    type: String,
  } ,
  host_name: {
    type: String,
    unique:true,
  } ,
  image: {
    type: String,
    unique:true,
  } 
},{
  versionKey:false,
}
);

module.exports = mongoose.model("Webinar", WebinarSchema);