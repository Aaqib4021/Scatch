const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model");

router.get("/", (req, res) => {
  res.send("hey Owner route is working👋");
});

// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(502)
        .send("you do not have permission to create an owner");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(200).send(createdOwner);
  });
}

module.exports = router;
