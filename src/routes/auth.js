const express = require("express");
const authenticate = require("../middlewares/authenticate");
const User = require("../models/User");

let router = express.Router();

router.get("/currentUser", authenticate, async (req, res) => {
  const user = await User.query().findOne({ id: req.userId });

  if (user) {
    res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } else {
    res.status(404).json({});
  }
});

module.exports = router;
