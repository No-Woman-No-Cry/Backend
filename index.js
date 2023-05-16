const express = require("express");
const app = express();
require("module-alias/register");
const routes = require("./src/routes/index.js");

app.use(routes);

// Start server
app.listen(3000, () => {
  console.log("Server listening on port 30000");
});
