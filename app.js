const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB succesfully"))
  .catch(err => console.log(err));


// Parse incoming request bo
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.get('/', (req, res) => res.send(`Hello Sweet Analytics`));
app.listen(port, () => console.log(`Server us running on port ${port}`));

