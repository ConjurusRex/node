exports.addItem = (req, res, next) => {
  console.log('store.controller - addItem()');
};

exports.getItems = (req, res, next) => {
  res.render('index.html');
}