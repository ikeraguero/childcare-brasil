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

async function main() {
    const school = await prisma.school.create({
        data: {
            photo: 'https://i.imgur.com/lwM38Pe.jpg',
            name: 'Escola Municipal Professora Lacy Luiza da Cruz Flores',
            address: 'Rua Waldemiro José Borges, 3997',
            city: 'Joinville',
            state: 'Santa Catarina',
        }
    })
}

main();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(auth(config));

const port = process.env.PORT || 3000;

// ============================================================
// FOR API

// GET
app.get("/api/dogs", api.dogs);
app.get("/api/dog/:dog_id", api.dog);
app.get("/api/schools", api.schools);
app.get("/api/school/:school_id", api.school);
app.get("/api/adoptable", api.dogadoptable);


// POST
app.post("/api/dogadd", api.dogadd);
app.post("/api/dogupdate/:dog_id", api.dogupdate);

app.post("/api/dogdel/:dog_id", api.dogdelete);


// app.post("/api/commentadd/:dog_id", api.commentadd);
app.post("/api/regdAdd/:dog_id", api.regdAdd);
app.post("/api/regmAdd/:dog_id", api.regmAdd);


// END -- FOR API
// ============================================================

// Running
app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});