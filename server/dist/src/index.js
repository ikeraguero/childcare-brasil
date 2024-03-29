"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client/edge");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const api = __importStar(require("./controllers/apicontroller"));
const express = require("express");
const app = express();
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
// GET
app.get("/api/children", api.children);
app.get("/api/child/:child_id", api.child);
app.get("/api/schools", api.schools);
app.get("/api/school/:school_id", api.school);
app.get("/api/donations", api.donations);
app.get("/api/donation/:donation_id", api.donation);
app.get("/api/states", api.states);
app.get("/api/state/:state_id", api.state);
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Port: http://localhost:${port}.`);
});
//# sourceMappingURL=index.js.map
