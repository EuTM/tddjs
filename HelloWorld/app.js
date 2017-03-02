var express = require('express');
var Text = require('./textgenerator.js');
var Myip = require('./getmyip.js');
var httpServer;

var app = express();
app.get('/', function (req, res) {
  const hello = new Text();
  const myip = new Myip()
  myip.get().then(function(ip) {
    res.send('<div id="test">' + hello.generate() + ' from ' + ip + '!</div>');
  });
});

exports.startWebserver = function() {
  httpServer = app.listen(3000);
}

exports.closeWebserver = function() {
  if (httpServer) httpServer.close();
}

if (!isStartedFromTests()) {
  exports.startWebserver();
}

function isStartedFromTests() {
  if(require.main != undefined) {
    return module.id != require.main.id;
  } else {
    return true;
  }
}