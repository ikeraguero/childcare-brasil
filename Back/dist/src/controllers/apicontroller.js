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
exports.donationupdate = exports.donationdelete = exports.donationadd = exports.donation = exports.donations = exports.schoolupdate = exports.schooldelete = exports.schooladd = exports.school = exports.schools = exports.childupdate = exports.childdelete = exports.childadd = exports.child = exports.children = void 0;
var search_1 = require("../../db/search");
var post_1 = require("../../db/post");
// Children
var children = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var children;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, search_1.getChildren)()];
            case 1:
                children = _a.sent();
                res.json(children.content);
                return [2 /*return*/];
        }
    });
}); };
exports.children = children;
var child = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var child;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, search_1.getChild)(req.params.child_id)];
            case 1:
                child = _a.sent();
                res.json(child.content);
                return [2 /*return*/];
        }
    });
}); };
exports.child = child;
var childadd = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var r, child;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = req.body;
                return [4 /*yield*/, (0, post_1.addChild)(r.childphoto, r.childname, r.childgender, r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.childmaterialsneeded, r.childresponsables)];
            case 1:
                child = _a.sent();
                res.redirect("http://localhost:8080/adminn");
                return [2 /*return*/];
        }
    });
}); };
exports.childadd = childadd;
var childdelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var child;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, post_1.deleteChild)(req.params.child_id)];
            case 1:
                child = _a.sent();
                res.json(child);
                return [2 /*return*/];
        }
    });
}); };
exports.childdelete = childdelete;
var childupdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var r, child;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = req.body;
                return [4 /*yield*/, (0, post_1.updateChild)(req.params.child_id, r.childphoto, r.childname, r.childgender, r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.childmaterialsneeded, r.childresponsables)];
            case 1:
                child = _a.sent();
                res.redirect("http://localhost:8080/adminn");
                return [2 /*return*/];
        }
    });
}); };
exports.childupdate = childupdate;
// Schools
var schools = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var schools;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, search_1.getSchools)()];
            case 1:
                schools = _a.sent();
                res.json(schools.content);
                return [2 /*return*/];
        }
    });
}); };
exports.schools = schools;
var school = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var school;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, search_1.getSchool)(req.params.school_id)];
            case 1:
                school = _a.sent();
                res.json(school.content);
                return [2 /*return*/];
        }
    });
}); };
exports.school = school;
var schooladd = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var r, school;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = req.body;
                return [4 /*yield*/, (0, post_1.addSchool)(r.schoolemail, r.schoolcnpj, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate, r.schoolmaterialsneeded, r.schooldirector)];
            case 1:
                school = _a.sent();
                res.redirect("http://localhost:8080/adminn");
                return [2 /*return*/];
        }
    });
}); };
exports.schooladd = schooladd;
var schooldelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var school;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, post_1.deleteSchool)(req.params.school_id)];
            case 1:
                school = _a.sent();
                res.json(school);
                return [2 /*return*/];
        }
    });
}); };
exports.schooldelete = schooldelete;
var schoolupdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var r, school;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = req.body;
                return [4 /*yield*/, (0, post_1.updateSchool)(req.params.school_id, r.schoolemail, r.schoolcnpj, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate, r.schoolmaterialsneeded, r.schooldirector)];
            case 1:
                school = _a.sent();
                res.redirect("http://localhost:8080/adminn");
                return [2 /*return*/];
        }
    });
}); };
exports.schoolupdate = schoolupdate;
// Donations
var donations = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var donations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, search_1.getDonations)()];
            case 1:
                donations = _a.sent();
                res.json(donations.content);
                return [2 /*return*/];
        }
    });
}); };
exports.donations = donations;
var donation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var donation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, search_1.getDonation)(req.params.donation_id)];
            case 1:
                donation = _a.sent();
                res.json(donation.content);
                return [2 /*return*/];
        }
    });
}); };
exports.donation = donation;
var donationadd = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var r, donation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = req.body;
                return [4 /*yield*/, (0, post_1.addDonation)(r.donationdonatortype, r.donationdonator, r.donationemail, r.donationcpf, r.donationcnpj, r.donationcellphone, r.donationtype, r.donationvalue, r.donationmaterials, r.donationdonatedto, r.donationdonatedtoid, r.donationstatus)];
            case 1:
                donation = _a.sent();
                res.redirect("http://localhost:8080/success");
                return [2 /*return*/];
        }
    });
}); };
exports.donationadd = donationadd;
var donationdelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var donation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, post_1.deleteDonation)(req.params.donation_id)];
            case 1:
                donation = _a.sent();
                res.json(donation);
                return [2 /*return*/];
        }
    });
}); };
exports.donationdelete = donationdelete;
var donationupdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var r, donation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = req.body;
                return [4 /*yield*/, (0, post_1.updateDonation)(req.params.donation_id, r.donationdonatortype, r.donationdonator, r.donationemail, r.donationcpf, r.donationcnpj, r.donationcellphone, r.donationtype, r.donationvalue, r.donationmaterials, r.donationdonatedto, r.donationdonatedtoid, r.donationstatus)];
            case 1:
                donation = _a.sent();
                res.json(donation);
                return [2 /*return*/];
        }
    });
}); };
exports.donationupdate = donationupdate;
//# sourceMappingURL=apicontroller.js.map