const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true, 
  },
  password: {
    type: String,
    required: true, 
  },
 token:{  
    type: String,
 },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
