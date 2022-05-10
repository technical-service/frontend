const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
// Assign the 3001 port for run
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
