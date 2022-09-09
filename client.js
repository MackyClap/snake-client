const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on('connect', () => {
    console.log('Connected Succesfully');
    conn.write('Name: MMM');
  });

  conn.on('data', (data) => {
    console.log('Server message: ', data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;