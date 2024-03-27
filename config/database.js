const { createConnection } = require("mysql");

const connection = createConnection({
  host: "br5t7jizpxwysnbh5stm-mysql.services.clever-cloud.com",
  user: "u2srssn7wr5lmqko",
  password: "Abq9wFryiLBG4ElUtHxY",
  database: "br5t7jizpxwysnbh5stm",
  port: 3306,
  connectionLimit: 10,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});

module.exports = connection;
