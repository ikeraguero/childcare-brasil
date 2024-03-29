import { PrismaClient } from "@prisma/client/edge";
import dotenv from "dotenv";
import cors from "cors";
import * as api from "./controllers/apicontroller";

const express = require("express");
const app = express();
dotenv.config();
const prisma = new PrismaClient();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
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
