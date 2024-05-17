var express = require('express');
var dateTimeDisplay = require('./script.js');

// create a new express server
var app = express();
const port = process.env.PORT || 8000
// serve the files out of ./public as our main files
// app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.send('DateTime --> ' + dateTimeDisplay.getCurrentDateTime());
    // res.sendFile(__dirname+'/index.html');
})

app.listen(port,function() {
  // print a message when the server starts listening
  //console.log("server starting on " + 8000);
});

