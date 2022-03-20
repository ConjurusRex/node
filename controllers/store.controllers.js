const items = [
  {
    title: 'Wand',
    price: '1',
    desc: 'A really great wand for witches and wizzards'
  }
]

exports.addItem = (req, res, next) => {
  console.log('store.controller - addItem()');
};

exports.getItems = (req, res, next) => {
  res.render('index.html');
}