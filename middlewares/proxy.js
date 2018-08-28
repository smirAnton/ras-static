const proxy = require('http-proxy-middleware');
const env = process.env;

const SERVER_HOST = 'https://ras-backend.herokuapp.com'

module.exports = proxy({
  changeOrigin: true,
  target: SERVER_HOST,
  ws: false
});
