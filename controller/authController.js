const userModel = require("../models/userModel");

const registerController = async (req, resp) => {
  const { username, email, password, phone, address } = req.body;
  try {
    //validation
    if (!username || !email || !password || !phone || !address) {
      return res.status(500).json({ message: "Please provide all fields" });
    }
    //check user
    const existing = await userModel.findOne({ email });
    if (existing) {
      return resp.status(500).json({ message: "Email user already exists" });
    }
    //create the user
    const user = await userModel.create({
      username: username,
      email: email,
      password: password,
      phone: phone,
    });
    resp.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    resp.status(500).json("Error creating  while user");
  }
};
//login

const loginController = async (req, resp) => {
  const { email, password } = req.body;
  try {
    //validation
    if ((!email, !password)) {
      return resp
        .status(500)
        .json({ success: false, message: "Please provide email or password" });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return resp
        .status(500)
        .json({ success: false, message: "User not found" });
    }
    resp
      .status(200)
      .json({ success: true, message: "User successfully", user });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Error in login" });
  }
};

module.exports = { registerController, loginController };
