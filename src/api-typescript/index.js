"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
//Create instance of express server
var app = express_1.default();
var fs = require("fs");
var allowedOrigins = "*";
var options = {
    origin: allowedOrigins,
};
app.use(cors_1.default(options));
app.use(express_1.default.json());
// Json File Path
var dataPath = "./data/partners.json";
//Route to Read from Json
app.get("/partners", function (req, res) {
    fs.readFile(dataPath, "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
//Launch server on defined port
var port = process.env.PORT || 3001;
app.listen(port, function () { return console.log("app listening on PORT ${port}"); });
