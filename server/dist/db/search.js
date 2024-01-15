"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getState =
  exports.getStates =
  exports.getDonation =
  exports.getDonations =
  exports.getSchool =
  exports.getSchools =
  exports.getChild =
  exports.getChildren =
    void 0;
const responseConstructor_1 = require("../lib/responseConstructor");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// get all children
function getChildren() {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const children = yield prisma.child.findMany();
    if (!children) {
      prisma.$disconnect();
      return new responseConstructor_1.response(503, "Children not found");
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(200, "Children found", children);
  });
}
exports.getChildren = getChildren;
//get specific child
function getChild(child_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const child = yield prisma.child.findUnique({
      where: {
        id: child_id,
      },
    });
    if (!child) {
      prisma.$disconnect();
      return new responseConstructor_1.response(
        503,
        `Child ${child_id} not found!`
      );
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(
      200,
      `Child ${child_id} found!`,
      child
    );
  });
}
exports.getChild = getChild;
//get all schools
function getSchools() {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const schools = yield prisma.school.findMany();
    if (!schools) {
      prisma.$disconnect();
      return new responseConstructor_1.response(503, "Schools not found");
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(200, "Schools found", schools);
  });
}
exports.getSchools = getSchools;
//get specific school
function getSchool(school_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const school = yield prisma.school.findUnique({
      where: {
        id: school_id,
      },
    });
    if (!school) {
      prisma.$disconnect();
      return new responseConstructor_1.response(
        503,
        `School ${school_id} not found!`
      );
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(
      200,
      `School ${school_id} found!`,
      school
    );
  });
}
exports.getSchool = getSchool;
//get all donations
function getDonations() {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const donations = yield prisma.donation.findMany();
    if (!donations) {
      prisma.$disconnect();
      return new responseConstructor_1.response(503, "Donations not found");
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(
      200,
      "Donations found",
      donations
    );
  });
}
exports.getDonations = getDonations;
//get specific donation
function getDonation(donation_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const donation = yield prisma.donation.findUnique({
      where: {
        id: donation_id,
      },
    });
    if (!donation) {
      prisma.$disconnect();
      return new responseConstructor_1.response(
        503,
        `Donation ${donation_id} not found!`
      );
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(
      200,
      `Donation ${donation_id} found!`,
      donation
    );
  });
}
exports.getDonation = getDonation;
//get all states
function getStates() {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const states = yield prisma.state.findMany();
    if (!states) {
      prisma.$disconnect();
      return new responseConstructor_1.response(503, "States not found");
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(200, "States found", states);
  });
}
exports.getStates = getStates;
//get specific state
function getState(state_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const state = yield prisma.state.findUnique({
      where: {
        id: state_id,
      },
    });
    if (!state) {
      prisma.$disconnect();
      return new responseConstructor_1.response(
        503,
        `Child ${state_id} not found!`
      );
    }
    yield prisma.$disconnect();
    return new responseConstructor_1.response(
      200,
      `Child ${state_id} found!`,
      state
    );
  });
}
exports.getState = getState;
//# sourceMappingURL=search.js.map
