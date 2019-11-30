require("dotenv").config();
const server = require("./api/server");

const port = process.env.DB_PORT || 3333;
server.listen(port, () => {
  console.info(`Now listening on port ${port}!`);
});
