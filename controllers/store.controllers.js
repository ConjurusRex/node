const items = [
  {
    title: 'Wand',
    price: '1',
    desc: 'A really great wand for witches and wizzards',
  },
];

exports.addItem = (req, res, next) => {
  console.log('store.controller - addItem()');
  try {
    const item = {
      title: req.body.title,
      desc: req.body.desc,
    };
    items.push(item);
    console.log(`item was successfully added: ${item.title} - ${item.desc}`);
    res.redirect('/');
  } catch (e) {
    throw new Error(`item was not added: ${e}`);
  }
};

exports.getItems = (req, res, next) => {
  res.render('index.html');
};
