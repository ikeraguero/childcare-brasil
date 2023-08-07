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
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = exports.states = exports.donationupdate = exports.donationdelete = exports.donationadd = exports.donation = exports.donations = exports.schoolupdate = exports.schooldelete = exports.schooladd = exports.school = exports.schools = exports.childupdate = exports.childdelete = exports.childadd = exports.child = exports.children = void 0;
const search_1 = require("../../db/search");
const post_1 = require("../../db/post");
// Children's APIs
const children = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const children = yield (0, search_1.getChildren)();
    res.json(children.content);
});
exports.children = children;
const child = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const child = yield (0, search_1.getChild)(req.params.child_id);
    res.json(child.content);
});
exports.child = child;
const childadd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const r = req.body;
    const child = yield (0, post_1.addChild)(r.childphoto, r.childname, r.childgender, r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.childmaterialsneeded, r.childresponsables);
    res.redirect("https://childcarebrasil.netlify.app/adminn/criancas");
});
exports.childadd = childadd;
const childdelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const child = yield (0, post_1.deleteChild)(req.params.child_id);
    res.json(child);
});
exports.childdelete = childdelete;
const childupdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const r = req.body;
    const child = yield (0, post_1.updateChild)(req.params.child_id, r.childphoto, r.childname, r.childgender, r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.childmaterialsneeded, r.childresponsables);
    res.redirect("https://childcarebrasil.netlify.app/adminn/criancas");
});
exports.childupdate = childupdate;
// Schools' APIs
const schools = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schools = yield (0, search_1.getSchools)();
    res.json(schools.content);
});
exports.schools = schools;
const school = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const school = yield (0, search_1.getSchool)(req.params.school_id);
    res.json(school.content);
});
exports.school = school;
const schooladd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const r = req.body;
    const school = yield (0, post_1.addSchool)(r.schoolemail, r.schoolinepcode, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate, r.schoolmaterialsneeded, r.schooldirector);
    res.redirect("https://childcarebrasil.netlify.app/adminn/escolas");
});
exports.schooladd = schooladd;
const schooldelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const school = yield (0, post_1.deleteSchool)(req.params.school_id);
    res.json(school);
});
exports.schooldelete = schooldelete;
const schoolupdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const r = req.body;
    const school = yield (0, post_1.updateSchool)(req.params.school_id, r.schoolemail, r.schoolinepcode, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate, r.schoolmaterialsneeded, r.schooldirector);
    res.redirect("https://childcarebrasil.netlify.app/adminn/escolas");
});
exports.schoolupdate = schoolupdate;
// Donations' APIs
const donations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const donations = yield (0, search_1.getDonations)();
    res.json(donations.content);
});
exports.donations = donations;
const donation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const donation = yield (0, search_1.getDonation)(req.params.donation_id);
    res.json(donation.content);
});
exports.donation = donation;
const donationadd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const r = req.body;
    const donation = yield (0, post_1.addDonation)(r.donationdonatortype, r.donationdonator, r.donationemail, r.donationcpf, r.donationcnpj, r.donationcellphone, r.donationtype, r.donationvalue, r.donationmaterials, r.donationdonatedto, r.donationdonatedtoid, r.donationstate, r.donationcity, r.donationaddress, r.donationstatus);
    res.redirect("https://childcarebrasil.netlify.app/success");
});
exports.donationadd = donationadd;
const donationdelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const donation = yield (0, post_1.deleteDonation)(req.params.donation_id);
    res.json(donation);
});
exports.donationdelete = donationdelete;
const donationupdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const r = req.body;
    const donation = yield (0, post_1.updateDonation)(req.params.donation_id, r.donationdonatortype, r.donationdonator, r.donationemail, r.donationcpf, r.donationcnpj, r.donationcellphone, r.donationtype, r.donationvalue, r.donationmaterials, r.donationdonatedto, r.donationdonatedtoid, r.donationstate, r.donationcity, r.donationaddress, r.donationstatus);
    res.json(donation);
});
exports.donationupdate = donationupdate;
// States' API
const states = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const states = yield (0, search_1.getStates)();
    res.json(states.content);
});
exports.states = states;
const state = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const state = yield (0, search_1.getState)(req.params.state_id);
    res.json(state.content);
});
exports.state = state;
//# sourceMappingURL=apicontroller.js.map