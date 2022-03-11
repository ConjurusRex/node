const express = require('express');
const app = express();
const port = 3000;
app.use('/', (req, res, next) => {
  res.send('snape kills dumbledore');
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});