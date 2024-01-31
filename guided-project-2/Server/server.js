const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const app = express();
// Database Name
const dbName = 'swapi';

async function getFilms() {
    try{
        const database = client.db(dbName);
        const filmsCol = database.collection('films');
        const films = await filmsCol.find().toArray();
        console.log('Films: ' + JSON.stringify(books));
    } finally {
        await client.close();
    }
}

app.get('/api/planets', function(req,res){
    return 1
})


// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});

app.listen(3000)