const bcrypt = require("bcryptjs");
const db = require("../db/db.js");
const { generateToken } = require("../jwtUtils.js");

const register = async (req, res) => {
  const { username, email, role, password } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    

    await db("users").insert({ username, email, password: hashedPassword,role });
    

    res.status(201).json({
      username,
      email,
      role,
      password: hashedPassword,
      role,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db("users").where({ email }).first();

    if (!user) {
      return res.status(404).send("User not found");
    }

    
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(password);
    console.log(user.password);

    if (passwordMatch) {
      const token = generateToken(user);

      res.json({
        success: true,
        message: "Authentication successful!",
        token: token,
      });
    } else {
    
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const getUserProfile = (req, res) => {};

const getAllUsers = (req, res) => {};

const deleteUsers = (req, res) => {};

module.exports = {
  register,
  login,
  getUserProfile,
  getAllUsers,
  deleteUsers,
};
