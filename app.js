require('dotenv').config();
const app = require('express')();
const fetch = require('node-fetch');
const rateLimit = require("express-rate-limit");
const cors = require('cors');

// limit requests to 20 per minute
app.use(rateLimit({
  windowMs: '60000',
  max: 20
}));

app.use(cors());

// get this weeks trending movies
app.get('/trending', (req, res) => {
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&page=${req.query.page}`)
    .then(res => res.json())
    .then(data => res.json(data));
});


// perform a query
app.get('/search', (req, res) => {
  fetch(`https://api.themoviedb.org/3/search/movie?query=${req.query.query}&page=${req.query.page}&include_adult=false&api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => res.json(data));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
