import express from "express";
import mongodb from "mongodb";
const { MongoClient } = mongodb

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const app = express();
// Database Name
const dbName = 'swapi';
let db

// Use connect method to connect to the server
try {
    await client.connect(url)
    console.log("Connected successfully to server");
    db = client.db(dbName);
    // console.log(db)
} catch (err) {
    console.error('cant connect', err)
}



app.get('/api/films', async function (req, res) {
    //get all the films
    const filmsCol = db.collection('films');
    const films = await filmsCol.find().toArray();
    console.log('Films: ' + JSON.stringify(films));

    //return all the films
    res.send(films)
})





app.listen(3000)
process.on("SIGINT", () => {
    client.close();
    console.log('sigint');
    process.exit();
})
