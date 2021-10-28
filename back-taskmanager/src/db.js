const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017/taskmanager";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});