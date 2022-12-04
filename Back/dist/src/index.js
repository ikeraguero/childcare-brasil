"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var api = __importStar(require("./controllers/apicontroller"));
var express = require("express");
var app = express();
dotenv_1["default"].config();
var prisma = new client_1.PrismaClient();
var bodyParser = require("body-parser");
var jwt = require("express-jwt").expressjwt;
var jwksRsa = require("jwks-rsa");
// Set up Auth0 configuration
var authConfig = {
    domain: "dev-hhi6hna9.us.auth0.com",
    audience: "https://childcare-brasil-api.com",
    useRefreshTokens: true,
    cacheLocation: 'localstorage'
};
app.get("/", function (req, res) {
    res.send("Hi! Server is listening on port ".concat(port));
});
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
var port = process.env.PORT || 3000;
// GET
app.get("/api/children", api.children);
app.get("/api/child/:child_id", api.child);
app.get("/api/schools", api.schools);
app.get("/api/school/:school_id", api.school);
app.get("/api/donations", api.donations);
app.get("/api/donation/:donation_id", api.donation);
// POST
app.post("/api/schooladd", api.schooladd);
app.post("/api/schoolupdate/:school_id", api.schoolupdate);
app.post("/api/schooldel/:school_id", api.schooldelete);
app.post("/api/childadd", api.childadd);
app.post("/api/childupdate/:child_id", api.childupdate);
app.post("/api/childdel/:child_id", api.childdelete);
app.post("/api/donationadd", api.donationadd);
app.post("/api/donationdel/:donation_id", api.donationdelete);
app.post("/api/donationupdate/:donation_id", api.donationupdate);
app.put("/api/donation/:donation_id", api.donation);
//
app.listen(port, function () {
    console.log("Port: http://localhost:".concat(port, "."));
});
//# sourceMappingURL=index.js.map