// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'mydb';
// const client = new MongoClient(url);
const express = require('express');
const app = express();
app.use(express.json());

module.exports = app



//  async function getData(){

//     let result= await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('credentials');
//     let response = await collection.find({}).toArray();
//     console.log(response);

// }

// getData();