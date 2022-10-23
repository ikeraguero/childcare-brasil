import { Request, Response } from 'express';
import { getChildren, getChild, getSchools, getSchool, getDonations, getDonation } from "../../db/search";
import { addChild, deleteChild, updateChild, addSchool, deleteSchool, updateSchool, addDonation, deleteDonation } from "../../db/post";
import { appendFile } from 'fs';


// Children

export const children = async (req: Request, res: Response) => {
    const children = await getChildren();
    res.json(children.content);
}

export const child = async (req: Request, res: Response) => {
    const child = await getChild(req.params.child_id);
    res.json(child.content);
}

export const childadd = async (req: Request, res: Response) => {
    const r = req.body;
    const child = await addChild(r.childphoto, r.childname, r.childgender,r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.childdesc, r.childmaterialsreceived);
    res.redirect("http://localhost:8080/adminn");

}


export const childdelete = async (req: Request, res: Response) => {
    const child = await deleteChild(req.params.child_id);
    res.json(child);
}

export const childupdate = async (req: Request, res: Response) => {
    const r = req.body;
    const child = await updateChild(req.params.child_id, r.childphoto, r.childname, r.childgender,r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.childdesc, r.childmaterialsreceived);
    res.redirect("http://localhost:8080/adminn");
}

// Schools

export const schools = async (req: Request, res: Response) => {
    const schools = await getSchools();
    res.json(schools.content);
}

export const school = async (req: Request, res: Response) => {
    const school = await getSchool(req.params.school_id);
    res.json(school.content);
}

export const schooladd = async (req: Request, res: Response) => {
    const r = req.body;
    const school = await addSchool(r.schoolemail, r.schoolcnpj, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate);
    res.redirect("http://localhost:8080/adminn");

}

export const schooldelete = async (req: Request, res: Response) => {
    const school = await deleteSchool(req.params.school_id);
    res.json(school);
}

export const schoolupdate = async (req: Request, res: Response) => {
    const r = req.body;
    const school = await updateSchool(req.params.school_id, r.schoolemail, r.schoolcnpj, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate);
    res.redirect("http://localhost:8080/adminn");
}

// Donations

export const donations = async (req: Request, res: Response) => {
    const donations = await getDonations();
    res.json(donations.content);
}

export const donation = async (req: Request, res: Response) => {
    const donation = await getDonation(req.params.donation_id);
    res.json(donation.content);
}

export const donationadd = async (req: Request, res: Response) => {
    const r = req.body;
    const donation = await addDonation(r.donationdonatortype, r.donationdonator, r.donationemail, r.donationcpf, r.donationcnpj, r.donationcellphone, r.donationtype, r.donationvalue, r.donationmaterials, r.donationdonatedto, r.donationdonatedtoid, r.donationstatus);
    res.redirect("http://localhost:8080/success")
}

export const donationdelete = async (req: Request, res: Response) => {
    const donation = await deleteDonation(req.params.donation_id);
    res.json(donation);
}