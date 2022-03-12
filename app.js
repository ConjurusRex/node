const express = require('express');
const app = express();
const port = 3000;

const storeRoutes = require('./routes/store.routes');

app.use(storeRoutes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
