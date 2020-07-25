var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UsersSchema = new Schema({
  // `title` is required and of type String
  email: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  password: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Users = mongoose.model("Users", UsersSchema);

// Export the Article model
module.exports = Users;