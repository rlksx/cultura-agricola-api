const express = require("express");
const sequelize = require("./config/database");
const productRoutes = require("./routes/culturaRoute");
const app = express();


sequelize.sync().then(() => console.log("Database connected"));

app.use(express.json());

app.use("/api/culturas",productRoutes)

app.listen(8080, () => {
  console.log("Server started on port 8080!");
});

