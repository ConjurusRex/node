const express = require('express');
const router = express.Router();
const storeControllers = require('../controllers/store.controllers');

router.get('/', (req, res, next) => {
  res.send('snape kills dumbledoor');
});

router.post('/add-item', storeControllers.addItem);

module.exports = router;
