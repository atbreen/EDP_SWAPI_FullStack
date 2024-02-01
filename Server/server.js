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

// Connect database to server
try {
    await client.connect(url)
    console.log("Connected successfully to server");
    db = client.db(dbName);
} catch (err) {
    console.error("Cannot Connect", err)
}

// Film GETs
// get all the films
app.get('/api/films', async function (req, res) {
    const filmsCol = db.collection('films');
    const films = await filmsCol.find().toArray();
    console.log('Films: ' + JSON.stringify(films));
    //return all the films
    res.send(films)
})
// get one film
app.get('/api/films/:id', async function (req, res) {
    const id = req.params.id;
    const filmsCol = db.collection('films');
    const film = await filmsCol.findOne({"id":+id});
    console.log(film)
    res.send(film)
})

// Character GETs
// get all the characters
app.get('/api/characters', async function (req, res) {
    const charactersCol = db.collection('characters');
    const characters = await charactersCol.find().toArray();
    console.log('Characters: ' + JSON.stringify(characters));
    //return all the characters
    res.send(characters)
})
// get one character
app.get('/api/characters/:id', async function (req, res) {
    const id = req.params.id;
    const charactersCol = db.collection('characters');
    const character = await charactersCol.findOne({"id":+id});
    console.log(character)
    res.send(character)
})
// get all films for character
app.get('/api/characters/:id/films', async function (req, res) {
    const id = req.params.id;
    const charFilmsCol = db.collection('films_characters');
    const charFilms = await charFilmsCol.find({"character_id":+id}).toArray();
    console.log(charFilms)
    const filmsCol = db.collection('films')
    const mappedFilms = charFilms.map( cf => cf.film_id)
    const films = await filmsCol.find({'id' : {$in: mappedFilms}}).toArray()
    console.log(mappedFilms)
    res.send(films)
})

// Planet GETs
// get all the planets
app.get('/api/planets', async function (req, res) {
    const planetsCol = db.collection('planets');
    const planets = await planetsCol.find().toArray();
    console.log('Planets: ' + JSON.stringify(planets));
    //return all the planets
    res.send(planets)
})
// get one planet
app.get('/api/planets/:id', async function (req, res) {
    const id = req.params.id;
    const planetsCol = db.collection('planets');
    const planet = await planetsCol.findOne({"id":+id});
    console.log(planet)
    res.send(planet)
})


// Express server listening
app.listen(3000)
process.on("SIGINT", () => {
    client.close();
    console.log('sigint');
    process.exit();
})
