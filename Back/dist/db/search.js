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
exports.getDonation = exports.getDonations = exports.getSchool = exports.getSchools = exports.getChild = exports.getChildren = void 0;
var responseConstructor_1 = require("../lib/responseConstructor");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
// all children
function getChildren() {
    return __awaiter(this, void 0, void 0, function () {
        var children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.child.findMany()];
                case 2:
                    children = _a.sent();
                    if (!children) {
                        prisma.$disconnect();
                        return [2 /*return*/, new responseConstructor_1.response(503, "Children not found")];
                    }
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, new responseConstructor_1.response(200, "Children found", children)];
            }
        });
    });
}
exports.getChildren = getChildren;
//specific child
function getChild(child_id) {
    return __awaiter(this, void 0, void 0, function () {
        var child;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.child.findUnique({
                            where: {
                                id: child_id
                            }
                        })];
                case 2:
                    child = _a.sent();
                    if (!child) {
                        prisma.$disconnect();
                        return [2 /*return*/, new responseConstructor_1.response(503, "Child ".concat(child_id, " not found!"))];
                    }
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, new responseConstructor_1.response(200, "Child ".concat(child_id, " found!"), child)];
            }
        });
    });
}
exports.getChild = getChild;
//all schools
function getSchools() {
    return __awaiter(this, void 0, void 0, function () {
        var schools;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.school.findMany()];
                case 2:
                    schools = _a.sent();
                    if (!schools) {
                        prisma.$disconnect();
                        return [2 /*return*/, new responseConstructor_1.response(503, "Schools not found")];
                    }
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, new responseConstructor_1.response(200, "Schools found", schools)];
            }
        });
    });
}
exports.getSchools = getSchools;
//specific school
function getSchool(school_id) {
    return __awaiter(this, void 0, void 0, function () {
        var school;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.school.findUnique({
                            where: {
                                id: school_id
                            }
                        })];
                case 2:
                    school = _a.sent();
                    if (!school) {
                        prisma.$disconnect();
                        return [2 /*return*/, new responseConstructor_1.response(503, "School ".concat(school_id, " not found!"))];
                    }
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, new responseConstructor_1.response(200, "School ".concat(school_id, " found!"), school)];
            }
        });
    });
}
exports.getSchool = getSchool;
// all donations
function getDonations() {
    return __awaiter(this, void 0, void 0, function () {
        var donations;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.donation.findMany()];
                case 2:
                    donations = _a.sent();
                    if (!donations) {
                        prisma.$disconnect();
                        return [2 /*return*/, new responseConstructor_1.response(503, "Donations not found")];
                    }
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, new responseConstructor_1.response(200, "Donations found", donations)];
            }
        });
    });
}
exports.getDonations = getDonations;
//specific donation
function getDonation(donation_id) {
    return __awaiter(this, void 0, void 0, function () {
        var donation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.donation.findUnique({
                            where: {
                                id: donation_id
                            }
                        })];
                case 2:
                    donation = _a.sent();
                    if (!donation) {
                        prisma.$disconnect();
                        return [2 /*return*/, new responseConstructor_1.response(503, "Donation ".concat(donation_id, " not found!"))];
                    }
                    return [4 /*yield*/, prisma.$disconnect()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, new responseConstructor_1.response(200, "Donation ".concat(donation_id, " found!"), donation)];
            }
        });
    });
}
exports.getDonation = getDonation;
//# sourceMappingURL=search.js.map