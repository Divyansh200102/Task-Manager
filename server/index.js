const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const usersRoute = require("./routes/usersRoute");
const teamRoute = require("./routes/teamRoute");
const tasksRoute = require("./routes/tasksRoute");

app.use(express.json());
app.use(cors());
app.use("/user", usersRoute);
app.use("/team", teamRoute);

app.use("/tasks", tasksRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


