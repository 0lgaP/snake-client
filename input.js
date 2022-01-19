const net = require("net");
let conn; //global

//standard input is stdin
const setupInput = function(connection) {
  //connection is passed to setupInput
  //setupInput assigns it ot a global variable(let conn)
  
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u001B\u005B\u0041') {
    conn.write(`Move: up`);
  }
  if (key === '\u001B\u005B\u0043') {
    conn.write(`Move: right`);
  }
  if (key === '\u001B\u005B\u0042') {
    conn.write(`Move: down`);
  }
  if (key === '\u001B\u005B\u0044') {
    conn.write(`Move: left`);
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
};