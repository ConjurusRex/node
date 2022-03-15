const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const port = 3000;

const storeRoutes = require('./routes/store.routes');

app.use(express.static(path.join(__dirname, 'views')));
app.use(storeRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
