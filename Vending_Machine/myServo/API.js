var http = require('http');
var express = require('express');
var piblaster = require('pi-blaster.js');
var ps = require('python-shell');

ps.PythonShell.run('../Reset_Servo.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
 
var app = express();
// ------------------------------------------------------------------------
// configure Express to serve index.html and any other static pages stored 
// in the home directory
app.use(express.static(__dirname));
 
// activate the vending machine door
app.get('/lock', function(req, res) { 
       ps.PythonShell.run('../GoOneWay.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
       res.end('Box is locked');
 });
 
// Express route for any other unrecognised incoming requests
app.get('*', function (req, res) {
       res.status(404).send('Unrecognised API call');
});
 
// Express route to handle errors
app.use(function (err, req, res, next) {
 if (req.xhr) {
       res.status(500).send('Oops, Something went wrong!');
 } else {
       next(err);
 }
}); // apt.use()
 
 
//------------------------------------------------------------------------
//on clrl-c, put stuff here to execute before closing your server with ctrl-c
process.on('SIGINT', function() {
 var i;
 console.log("\nGracefully shutting down from SIGINT (Ctrl+C)");
 process.exit();
});
 
// ------------------------------------------------------------------------
// Start Express App Server
//
app.listen(3000);
console.log('App Server is listening on port 3000');
