const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    minlength:3
  } ,
  password: {
      type: String,
      required: true,
      unique: true,
      minlength:3
  }
},{
  versionKey:false,
}
);

module.exports = mongoose.model("User", UserSchema);