import { Request, Response } from 'express';
import { getChildren, getChild, getSchools, getSchool } from "../../db/searchFunctions";
import { addChild, deleteChild, updateChild, addSchool, deleteSchool, updateSchool } from "../../db/postFunctions";

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
    const child = await addChild(r.childphoto, r.childname, r.childgender,r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.is_castrated);
    res.redirect("http://localhost:8080/admin");

}


export const childdelete = async (req: Request, res: Response) => {
    const child = await deleteChild(req.params.child_id);
    res.json(child);
}

export const childupdate = async (req: Request, res: Response) => {
    const r = req.body;
    const child = await updateChild(req.params.child_id, r.childphoto, r.childname, r.childgender,r.childschool, r.childage, r.childaddress, r.childcity, r.childstate, r.childcpf, r.is_castrated);
    res.redirect("http://localhost:8080/admin");
}


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
    res.redirect("http://localhost:8080/admin");

}

export const schooldelete = async (req: Request, res: Response) => {
    const school = await deleteSchool(req.params.school_id);
    res.json(school);
}

export const schoolupdate = async (req: Request, res: Response) => {
    const r = req.body;
    const school = await updateSchool(req.params.school_id, r.schoolemail, r.schoolcnpj, r.schoolcellphone, r.schoolphoto, r.schoolname, r.schooladdress, r.schoolcity, r.schoolstate);
    res.redirect("http://localhost:8080/admin");
}


