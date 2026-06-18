const Usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Blacklistmodel = require("../models/blacklist.model");

/**
 * @name registerUsercontroller
 * @desc Register a new user,expects username,email and password in the request body
 * @access Public
 */
async function registerUsercontroller(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
  const ifUserExists = await Usermodel.findOne({
    $or: [{ username }, { email }],
  });
  if (ifUserExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await Usermodel.create({
    username,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name loginUsercontroller
 * @desc Login a user, expects email and password in the request body
 * @access Public
 */
async function loginUsercontroller(req, res) {
  const { email, password } = req.body;
  const user = await Usermodel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name logoutUsercontroller
 * @desc Logout a user, clears the token cookie and blacklists the token
 * @access Public
 */
async function logoutUsercontroller(req, res) {
  const token  = req.cookies.token;

  if (token) {
    // Blacklist the token
    await Blacklistmodel.create({token});
  }

  // Clear the token cookie
  res.clearCookie("token");

  res.status(200).json({ message: "User logged out successfully" });
}

/**
 * @name getMecontroller
 * @desc Get the profile of the logged-in user
 * @access Private
 */
async function getMecontroller(req, res) {
  const user = await Usermodel.findById(req.user.id);
  res.status(200).json({
    message: "User profile fetched successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

module.exports = { registerUsercontroller, loginUsercontroller, logoutUsercontroller, getMecontroller };
