const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPasswod = process.env.DB_PASS;

const conn = async () => {
  mongoose.set("strictQuery", false);
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPasswod}@cluster0.ix5jiiw.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn()

module.exports = conn;
