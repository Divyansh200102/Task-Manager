import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3000/user/register", {
      username, 
      email,
      password,
      role,
    });

    navigate("/tasks");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="">Name</label>
        <input type="text" onChange={handleUsername} value={username} />

        <label className="">Email</label>
        <input type="email" onChange={handleEmail} value={email} />

        <label className="">Password</label>
        <input type="password" onChange={handlePassword} value={password} />

        <label className="">Role</label>
        <input
          type="text"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
