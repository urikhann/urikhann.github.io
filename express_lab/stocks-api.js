const path = require('path');
const express = require('express');
// create an express app 
const app = express();
// handle requests for static resources 
app.use('/static', express.static(path.join(__dirname, 'public')));
// set up route handling 
const router = require('./scripts/stock-router.js');
router.handleAllStocks(app);
router.handleSingleSymbol(app);
router.handleNameSearch(app);
// Use express to listen to port 
let port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
