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
exports.updateDonation =
  exports.deleteDonation =
  exports.addDonation =
  exports.deleteSchool =
  exports.updateSchool =
  exports.addSchool =
  exports.deleteChild =
  exports.updateChild =
  exports.addChild =
    void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addChild(
  childphoto,
  childname,
  childgender,
  childschool,
  childage,
  childaddress,
  childcity,
  childstate,
  childcpf,
  childmaterialsneeded,
  childresponsables
) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const child = yield prisma.child.create({
      data: {
        photo: childphoto,
        name: childname,
        gender: childgender,
        school: childschool,
        age: childage,
        address: childaddress,
        city: childcity,
        state: childstate,
        cpf: childcpf,
        materialsneeded: childmaterialsneeded,
        responsables: childresponsables,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.addChild = addChild;
function updateChild(
  child_id,
  childphoto,
  childname,
  childgender,
  childschool,
  childage,
  childaddress,
  childcity,
  childstate,
  childcpf,
  childmaterialsneeded,
  childresponsables
) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const child = yield prisma.child.update({
      where: {
        id: child_id,
      },
      data: {
        photo: childphoto,
        name: childname,
        gender: childgender,
        school: childschool,
        age: childage,
        address: childaddress,
        city: childcity,
        state: childstate,
        cpf: childcpf,
        materialsneeded: childmaterialsneeded,
        responsables: childresponsables,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.updateChild = updateChild;
function deleteChild(child_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const child = yield prisma.child.delete({
      where: {
        id: child_id,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.deleteChild = deleteChild;
function addSchool(
  schoolemail,
  schoolinepcode,
  schoolcellphone,
  schoolphoto,
  schoolname,
  schooladdress,
  schoolcity,
  schoolstate,
  schoolmaterialsneeded,
  schooldirector
) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const school = yield prisma.school.create({
      data: {
        email: schoolemail,
        inepcode: schoolinepcode,
        cellphone: schoolcellphone,
        photo: schoolphoto,
        name: schoolname,
        address: schooladdress,
        city: schoolcity,
        state: schoolstate,
        materialsneeded: schoolmaterialsneeded,
        director: schooldirector,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.addSchool = addSchool;
function updateSchool(
  school_id,
  schoolemail,
  schoolinepcode,
  schoolcellphone,
  schoolphoto,
  schoolname,
  schooladdress,
  schoolcity,
  schoolstate,
  schoolmaterialsneeded,
  schooldirector
) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const school = yield prisma.school.update({
      where: {
        id: school_id,
      },
      data: {
        email: schoolemail,
        inepcode: schoolinepcode,
        cellphone: schoolcellphone,
        photo: schoolphoto,
        name: schoolname,
        address: schooladdress,
        city: schoolcity,
        state: schoolstate,
        materialsneeded: schoolmaterialsneeded,
        director: schooldirector,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.updateSchool = updateSchool;
function deleteSchool(school_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const school = yield prisma.school.delete({
      where: {
        id: school_id,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.deleteSchool = deleteSchool;
function addDonation(
  donationdonatortype,
  donationdonator,
  donationemail,
  donationcpf,
  donationcnpj,
  donationcellphone,
  donationtype,
  donationvalue,
  donationmaterials,
  donationdonatedto,
  donationdonatedtoid,
  donationstate,
  donationcity,
  donationaddress,
  donationstatus
) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const donation = yield prisma.donation.create({
      data: {
        donatortype: donationdonatortype,
        donator: donationdonator,
        email: donationemail,
        cpf: donationcpf,
        cnpj: donationcnpj,
        cellphone: donationcellphone,
        type: donationtype,
        value: donationvalue,
        materials: donationmaterials,
        donatedto: donationdonatedto,
        donatedtoid: donationdonatedtoid,
        state: donationstate,
        city: donationcity,
        address: donationaddress,
        status: donationstatus,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.addDonation = addDonation;
function deleteDonation(donation_id) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const donation = yield prisma.donation.delete({
      where: {
        id: donation_id,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.deleteDonation = deleteDonation;
function updateDonation(
  donation_id,
  donationdonatortype,
  donationdonator,
  donationemail,
  donationcpf,
  donationcnpj,
  donationcellphone,
  donationtype,
  donationvalue,
  donationmaterials,
  donationdonatedto,
  donationdonatedtoid,
  donationstate,
  donationcity,
  donationaddress,
  donationstatus
) {
  return __awaiter(this, void 0, void 0, function* () {
    yield prisma.$connect();
    const donation = yield prisma.donation.update({
      where: {
        id: donation_id,
      },
      data: {
        donatortype: donationdonatortype,
        donator: donationdonator,
        email: donationemail,
        cpf: donationcpf,
        cnpj: donationcnpj,
        cellphone: donationcellphone,
        type: donationtype,
        value: donationvalue,
        materials: donationmaterials,
        donatedto: donationdonatedto,
        donatedtoid: donationdonatedtoid,
        status: donationstatus,
      },
    });
    yield prisma.$disconnect();
  });
}
exports.updateDonation = updateDonation;
//# sourceMappingURL=post.js.map
