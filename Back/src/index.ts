import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { auth } from 'express-openid-connect';
import { config } from "../auth/authConfig";

import * as api from "./controllers/api.controller";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(auth(config));

const port = process.env.PORT || 3000;

// ============================================================
// FOR API

// GET
app.get("/api/children", api.children);
app.get("/api/child/:child_id", api.child);
app.get("/api/schools", api.schools);
app.get("/api/school/:school_id", api.school);


// POST
app.post("/api/childadd", api.childadd);
app.post("/api/childupdate/:child_id", api.childupdate);
app.post("/api/childdel/:child_id", api.childdelete);

app.post("/api/schooladd", api.childadd);
app.post("/api/schoolupdate/:school_id", api.childupdate);
app.post("/api/schooldel/:school_id", api.childdelete);




// END -- FOR API
// ============================================================

// Running
app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});