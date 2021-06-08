import express from "express";

//Create instance of express server
const app = express();
const fs = require("fs");

// variables
const dataPath = "./data/partners.json";

// READ
app.get("/partners", (req, res) => {
  fs.readFile(dataPath, "utf8", (err: any, data: string) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

//Launch server on defined port
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("app listening on PORT ${port}"));
