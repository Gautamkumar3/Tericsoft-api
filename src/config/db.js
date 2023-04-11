const mongoose = require("mongoose");
require("dotenv").config();

const Connect = async () => {
  return mongoose.connect(`${process.env.URL}/tericsoft`);
};

module.exports = Connect;
