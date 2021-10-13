const express = require("express");
const routes = require("./routes");

var path = require('path');
const app = express();

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });