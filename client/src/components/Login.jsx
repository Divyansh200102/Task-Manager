import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   
      await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      navigate("/tasks");

   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="">Email</label>
        <input type="email" onChange={handleEmail} value={email} />

        <label className="">Password</label>
        <input type="password" onChange={handlePassword} value={password} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
