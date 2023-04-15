const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://zye:qwerty12345@cluster0.dripm.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true
    })

    console.log("mongodb conected");
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

module.exports = connectDB