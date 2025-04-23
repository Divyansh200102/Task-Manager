import React from "react";

const UserProfile = () => {
  return (
    <div>
      <form action="">
        <label>username</label>
        <input type="text" value={username}/> 
        <label>email</label>
        <input type="email" value={email} />
        <label>password</label>
        <input type="password" value={password} />
        <label>Role</label>
        <input type="text" value={username} />
      </form>
    </div>
  );
};

export default UserProfile;

// name  (have a button in front of each field to edit it)
//         email
//         password
//         role
//fetch all feilds from the backend about the user and give the option to edit it and the team he belongs to(maybe).