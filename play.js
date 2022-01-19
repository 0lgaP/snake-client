const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');


//establish connection to game server
const conn = connect();


setupInput(conn);// here we pass the connection as an argument to setupInput

console.log("connection ...");



