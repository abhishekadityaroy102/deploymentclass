const mongoose = require("mongoose");
const connection = () =>
  mongoose.connect(
    "mongodb+srv://demotest:Demotest@cluster0.dr3kwiq.mongodb.net/demodata?retryWrites=true&w=majority"
  );
module.exports = { connection };
