const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'success' });
});

const port = 3333;
server.listen(port, () => {
  console.info(`Now listening on port ${port}!`);
});
