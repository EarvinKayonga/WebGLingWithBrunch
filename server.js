(function() {
  'use strict';
  var express = require('express'),
    app = express(),
    port = 10003;


  app.use(express.static(__dirname + "/public"));
  app.listen(port);
  console.log("Server running on " + port);
})();
