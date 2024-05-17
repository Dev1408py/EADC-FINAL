var express = require('express');

// create a new express server
var app = express();
const port = process.env.PORT || 8000
// serve the files out of ./public as our main files
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(port,function() {
  // print a message when the server starts listening
  //console.log("server starting on " + 8000);
});

