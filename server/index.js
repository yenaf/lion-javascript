//console.log('안녕 자바스크립트');

const liveServer = require('live-server');

const params = {
  port : 5500,
  host : 'localhost',
  root : './client',
  open : false
}

liveServer.start(params);