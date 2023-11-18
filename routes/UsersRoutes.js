const express = require("express");
const router = express.Router();
const userSchema = require("../schema/userSchema");

router.post("/create-users", (req, res, next) => {
  userSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.get("/", (req, res, next) => {
  userSchema.find(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

module.exports = router;
