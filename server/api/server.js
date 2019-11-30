const express = require("express");
const server = express();

server.use(express.json());

server.get("/api/", (req, res) => {
  res.status(200).json({ message: "success" });
});

server.get("/", (req, res) => {
  if (process.env.NODE_ENV !== "development") {
    // TODO: Actually get this to work
    res.send(require("./dist"));
  }
});
