const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    access_allowed: {
      type: Boolean,
      default: true
    },
    notebooks: [
      {
        name: String,
        date_created: String,
        notes: [
          {
            title: String,
            date_created: String,
            body: String,
            last_updated: String
          }
        ]
      }
    ]
  },
  { collection: "users" }
);

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
