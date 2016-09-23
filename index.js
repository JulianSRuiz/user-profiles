const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const config = require("./config/config");
const app = express();
const port = 4000;

app.use(session(config));
app.use(json());
app.use(cors(corsOptions));
app.use(express.static(`${__dirname}/public`));

const userCtrl = require("./controllers/userCtrl");
const profileCtrl = require("./controllers/profileCtrl");

app.post('/api/login', userCtrl.login);
app.get('/api/login', profileCtrl.getFriends);

var corsOptions = {
  origin: 'http://localhost:4000'
};

app.listen(port, () => console.log(`Listening on ${port}`));
