import express from "express";
import mainRoutes from "./routes/index.js";
import userRoutes from "./routes/user.js";

const app = express();
const port = 3000;

app.use(express.json());

// routes
app.use("/", mainRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});