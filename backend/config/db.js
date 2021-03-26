const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await 
        mongoose.connect(
          "mongodb://localhost/crud",
          {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },
          (req, res) => {
            console.log("The database is connected");
          }
        );
    }
    catch (err) {
        console.log(`Error : ${err.message}`);
        process.exit(1)
    }
}
module.exports = connectDB;