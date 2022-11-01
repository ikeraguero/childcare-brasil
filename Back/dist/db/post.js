"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.updateDonation = exports.deleteDonation = exports.addDonation = exports.uploadImage = exports.deleteSchool = exports.updateSchool = exports.addSchool = exports.deleteChild = exports.updateChild = exports.addChild = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function addChild(childphoto, childname, childgender, childschool, childage, childaddress, childcity, childstate, childcpf, childdesc, childmaterialsreceived) {
    return __awaiter(this, void 0, void 0, function () {
        var child;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.child.create({
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
                                description: childdesc,
                                materialsreceived: childmaterialsreceived
                            }
                        })];
                case 2:
                    child = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addChild = addChild;
;
function updateChild(child_id, childphoto, childname, childgender, childschool, childage, childaddress, childcity, childstate, childcpf, childdesc, childmaterialsreceived) {
    return __awaiter(this, void 0, void 0, function () {
        var child;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.child.update({
                            where: {
                                id: child_id
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
                                description: childdesc,
                                materialsreceived: childmaterialsreceived
                            }
                        })];
                case 2:
                    child = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateChild = updateChild;
;
function deleteChild(child_id) {
    return __awaiter(this, void 0, void 0, function () {
        var child;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.child["delete"]({
                            where: {
                                id: child_id
                            }
                        })];
                case 2:
                    child = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteChild = deleteChild;
function addSchool(schoolemail, schoolcnpj, schoolcellphone, schoolphoto, schoolname, schooladdress, schoolcity, schoolstate) {
    return __awaiter(this, void 0, void 0, function () {
        var school;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.school.create({
                            data: {
                                email: schoolemail,
                                cnpj: schoolcnpj,
                                cellphone: schoolcellphone,
                                photo: schoolphoto,
                                name: schoolname,
                                address: schooladdress,
                                city: schoolcity,
                                state: schoolstate
                            }
                        })];
                case 2:
                    school = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addSchool = addSchool;
;
function updateSchool(school_id, schoolemail, schoolcnpj, schoolcellphone, schoolphoto, schoolname, schooladdress, schoolcity, schoolstate) {
    return __awaiter(this, void 0, void 0, function () {
        var school;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.school.update({
                            where: {
                                id: school_id
                            },
                            data: {
                                email: schoolemail,
                                cnpj: schoolcnpj,
                                cellphone: schoolcellphone,
                                photo: schoolphoto,
                                name: schoolname,
                                address: schooladdress,
                                city: schoolcity,
                                state: schoolstate
                            }
                        })];
                case 2:
                    school = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateSchool = updateSchool;
;
function deleteSchool(school_id) {
    return __awaiter(this, void 0, void 0, function () {
        var school;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.school["delete"]({
                            where: {
                                id: school_id
                            }
                        })];
                case 2:
                    school = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteSchool = deleteSchool;
function uploadImage(child_id, image) {
    return __awaiter(this, void 0, void 0, function () {
        var child;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.child.update({
                            where: {
                                id: child_id
                            },
                            data: {
                                photo: image
                            }
                        })];
                case 2:
                    child = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.uploadImage = uploadImage;
function addDonation(donationdonatortype, donationdonator, donationemail, donationcpf, donationcnpj, donationcellphone, donationtype, donationvalue, donationmaterials, donationdonatedto, donationdonatedtoid, donationstatus) {
    return __awaiter(this, void 0, void 0, function () {
        var donation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.donation.create({
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
                                status: donationstatus
                            }
                        })];
                case 2:
                    donation = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addDonation = addDonation;
;
function deleteDonation(donation_id) {
    return __awaiter(this, void 0, void 0, function () {
        var donation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.donation["delete"]({
                            where: {
                                id: donation_id
                            }
                        })];
                case 2:
                    donation = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteDonation = deleteDonation;
function updateDonation(donation_id, donationdonatortype, donationdonator, donationemail, donationcpf, donationcnpj, donationcellphone, donationtype, donationvalue, donationmaterials, donationdonatedto, donationdonatedtoid, donationstatus) {
    return __awaiter(this, void 0, void 0, function () {
        var donation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.donation.update({
                            where: {
                                id: donation_id
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
                                status: donationstatus
                            }
                        })];
                case 2:
                    donation = _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateDonation = updateDonation;
;
//# sourceMappingURL=post.js.map