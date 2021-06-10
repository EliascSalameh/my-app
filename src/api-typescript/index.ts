import express from "express";
import cors from "cors";

//Create instance of express server
const app = express();
const fs = require("fs");
const allowedOrigins = "*";
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(express.json());
// Json File Path
const dataPath = "./data/partners.json";
//Route to Read from Json
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
