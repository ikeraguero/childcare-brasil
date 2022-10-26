import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';
import * as api from "./controllers/apicontroller"; 


const express = require("express");
const app = express();
dotenv.config();
const prisma = new PrismaClient();

const bodyParser = require("body-parser");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");


// Set up Auth0 configuration
const authConfig = {
  domain: "dev-hhi6hna9.us.auth0.com",
  audience: "https://childcare-brasil-api.com",
  useRefreshTokens: true,
  cacheLocation: 'localstorage'
};

// Create middleware to validate the JWT using express-jwt
const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"]
});

// mock data to send to our frontend
let events = [
  {
    id: 1,
    name: "Charity Ball",
    category: "Fundraising",
    description:
      "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
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
    description:
      "Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.",
    featuredImage: "https://placekitten.com/500/500",
    images: ["https://placekitten.com/500/500"],
    location: "1234 Dog Alley",
    date: "11-21-2019",
    time: "12:00"
  }
];

// get all events
app.get("/events", (req, res) => {
  res.send(events);
});

app.get("/events/:id", checkJwt, (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(event => event.id === id);
  res.send(event);
});

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 3000;


// GET
app.get("/api/children", api.children);
app.get("/api/child/:child_id", api.child);

app.get("/api/schools", api.schools);
app.get("/api/school/:school_id", api.school)

app.get("/api/donations", api.donations,);
app.get("/api/donation/:donation_id", api.donation);

// POST
app.post("/api/schooladd", api.schooladd);
app.post("/api/schoolupdate/:school_id", api.schoolupdate);
app.post("/api/schooldel/:school_id", api.schooldelete);

app.post("/api/childadd", api.childadd);
app.post("/api/childupdate/:child_id", api.childupdate);
app.post("/api/childdel/:child_id", api.childdelete);

app.post("/api/donationadd", api.donationadd);
app.post("/api/donationdel/:donation_id", api.donationdelete)
app.post("/api/donationupdate/:donation_id", api.donationupdate)


//

app.listen(port, () => {
  console.log( `Port: http://localhost:${ port }.` );
});

