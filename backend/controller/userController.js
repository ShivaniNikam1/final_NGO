const userModel = require("../models/userModels");
const { generateToken } = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
  try {
    const existingUser = await userModel.find({ email: req.body.email });

    if (existingUser.length > 0) {
      res.status(200).json("exists");
    } else {
      const newUser = new userModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });

      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    }
  } catch (error) {
    console.log(error);
    // You might want to send an error response here as well
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

exports.authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      const passing = {
        message: "Success",
        sendUser: user,
      };
      res.status(201).json(passing);
    } else {
      res.status(401);
      throw new Error("Invalid email or passsword");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  res.status(200).json({ message: "User logged out " });
};

exports.getUserProfile = async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
};
