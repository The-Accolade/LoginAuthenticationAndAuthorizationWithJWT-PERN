const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    // destructure the token from the request
    const jwtToken = req.header("token");

    // check if there's no jwttoken
    if (!jwtToken) {
      return res.status(403).json("Unauthorized!");
    }

    //veify if the jwt token is authentic

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Unauthorized");
  }

  next();
};
