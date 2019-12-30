var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var History = require('./routes/History')


app.use('/users', Users)
app.use('/histories', History)
app.get('/blacklist', function(req, res) {
  res.send('SEND HELP');
});

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
