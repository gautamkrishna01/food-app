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
module.exports = { registerController };
