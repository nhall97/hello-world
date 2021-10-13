const express = require("express");
const routes = require("./routes");
var path = require('path');
// App
const app = express();

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));