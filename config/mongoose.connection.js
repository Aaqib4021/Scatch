const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
dbgr("Debugging is enabled");

mongoose
  .connect("mongodb://localhost:27017/Scatch")
  .then(function () {
    dbgr(" Db connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
