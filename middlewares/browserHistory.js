var app = require('express');
var path = require('path');

const router = app.Router();

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
