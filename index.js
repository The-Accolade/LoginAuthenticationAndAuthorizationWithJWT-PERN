const express = require("express");
const cors = require("cors");
const app = express();

//Middleware
app.use(express.json()); //to require the body
app.use(cors());

//ROUTES
//--> Register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//Dashboard
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
    console.log("App is running on port 5000")
});