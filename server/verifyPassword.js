const bcrypt = require("bcrypt");
const storedHash = "stored_hash_from_database";
const userProvidedPassword = "user_input_password";

bcrypt.compare(userProvidedPassword, storedHash, function (err, result) {
  if (err) throw err;
  if (result === true) {
    // Passwords match, grant access
  } else {
    // Passwords do not match, deny access
  }
});
