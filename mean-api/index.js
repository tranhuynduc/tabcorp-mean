const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./models');
const routes = require('./routes');

const cors = require('cors');

const CONFIG = require('./config/configs');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api', routes);

app.use('/', function(req, res){
	res.statusCode = 200;//send the appropriate status code
	res.json({status:"success", message:"Mongo API", data:{}})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(CONFIG.port, () => {
  console.log(`App listten on port ${CONFIG.port}`);
})
