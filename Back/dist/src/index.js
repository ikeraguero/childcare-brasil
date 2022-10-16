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
// Create middleware to validate the JWT using express-jwt
var checkJwt = jwt({
    // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://".concat(authConfig.domain, "/.well-known/jwks.json")
    }),
    // Validate the audience (Identifier) and the issuer (Domain).
    audience: authConfig.audience,
    issuer: "https://".concat(authConfig.domain, "/"),
    algorithms: ["RS256"]
});
// mock data to send to our frontend
var events = [
    {
        id: 1,
        name: "Charity Ball",
        category: "Fundraising",
        description: "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
        featuredImage: "https://placekitten.com/500/500",
        images: [
            "https://placekitten.com/500/500",
            "https://placekitten.com/500/500",
            "https://placekitten.com/500/500"
        ],
        location: "1234 Fancy Ave",
        date: "12-25-2019",
        time: "11:30"
    },
    {
        id: 2,
        name: "Rescue Center Goods Drive",
        category: "Adoptions",
        description: "Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.",
        featuredImage: "https://placekitten.com/500/500",
        images: ["https://placekitten.com/500/500"],
        location: "1234 Dog Alley",
        date: "11-21-2019",
        time: "12:00"
    }
];
// get all events
app.get("/events", function (req, res) {
    res.send(events);
});
app.get("/events/:id", checkJwt, function (req, res) {
    var id = Number(req.params.id);
    var event = events.find(function (event) { return event.id === id; });
    res.send(event);
});
app.get("/", function (req, res) {
    res.send("Hi! Server is listening on port ".concat(port));
});
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
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
//
app.listen(port, function () {
    console.log("Port: http://localhost:".concat(port, "."));
});
//# sourceMappingURL=index.js.map