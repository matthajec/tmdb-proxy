require('dotenv').config();
const app = require('express')();
const fetch = require('node-fetch');

app.get('/trending', (req, res) => {
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => res.json(data));
});

app.get('/search', (req, res) => {
  fetch(`https://api.themoviedb.org/3/search/movie?query=${req.query.query}&page=${req.query.page}&include_adult=false&api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => res.json(data));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});