// 1. Team Model

// Create Teams database schema
// → Design and create a database table/model to store team info (e.g., name, owner, created_at).

// Implement create team endpoint
// → Build an API endpoint to allow users to create new teams and save them to the database.

// Add team membership management
// → Implement logic to add/remove members, assign roles (e.g., admin, member), and manage permissions.

// Create team invitation system
// → Enable inviting users via email or link to join a team, with tracking of invitation status (pending, accepted, expired).



const db = require("../db/db.js");

const createTeam = (req, res) => {};

const deleteTeams = (req, res) => {};

const getAllTeams = (req, res) => {};

const updateTeam = (req, res) => {};

module.exports = {
  createTeam,
  deleteTeams,
  updateTeam,
  getAllTeams,
};
