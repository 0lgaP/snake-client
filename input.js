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
  if (key === 'w') {
    conn.write(`Move: up`);

  }
  if (key === 'd') {
    conn.write(`Move: right`);
  }
  if (key === 's') {
    conn.write(`Move: down`);
  }
  if (key === 'a') {
    conn.write(`Move: left`);
  }
  if (key === 'g') {
    conn.write(`Say: conda don't want`);
  }
  if (key === 'h') {
    conn.write(`Say: none unless`);
  }
  if (key === 'j') {
    conn.write(`Say: u got buns hun`);
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
};