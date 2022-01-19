const net = require('net');

//establish connection to game server
const conn = net.createConnection({
  host: 'localhost',
  port: 50541
});

const connect = function() {
  conn.setEncoding('utf8');
  return conn;
};

console.log("connection ...");
connect();

conn.on('data', (data) => {
  console.log('Server says: ', data);
});