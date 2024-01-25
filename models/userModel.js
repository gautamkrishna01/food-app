const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "user name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    address: {
      type: String,
      require: [true, "address is required"],
    },
    phone: {
      type: String,
      require: [true, "phone is required"],
    },
    usertype: {
      type: String,
      require: [true, "user type is required"],
      default: "clinet",
      enum: ["clinet", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw2zxplOVkdMj3wUY8czoQ6e&ust=1706281567239000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDLwKfo-IMDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
