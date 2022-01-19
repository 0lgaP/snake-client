
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server!..NOICE");
    conn.write(`Name: ANA`);
    
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};



module.exports = {
  connect,
};


/*
    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 500);
    // setTimeout(() => {
    //   conn.write(`Move: left`);
    // }, 1500);


if (key === '\u001B\u005B\u0041') {
  setInterval(() => {
    conn.write(`Move: up`);
  }, 500);
}
if (key === '\u001B\u005B\u0043') {
  setInterval(() => {
    conn.write(`Move: right`);
  }, 500);
}
if (key === '\u001B\u005B\u0042') {
  setInterval(() => {
    conn.write(`Move: down`);
  }, 500);
}
if (key === '\u001B\u005B\u0044') {
  setInterval(() => {
    conn.write(`Move: left`);
  }, 500);
}
if (key === '\u0003') {
  process.exit();
};
*/