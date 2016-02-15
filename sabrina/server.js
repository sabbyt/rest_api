const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/hogc_dev');

const donorsRouter = require(__dirname + '/routes/donor_routes');
const requestsRouter = require(__dirname + '/routes/request_routes');
const authRouter = require(__dirname + '/routes/auth_routes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/api', donorsRouter);
app.use('/api', requestsRouter);
app.use(authRouter);

var PORT = process.env.PORT || 3000;
var server = module.exports = exports = app.listen(PORT, () => console.log('Server started on port: ' + PORT));
