import { Request, Response } from 'express';
import { getChildren, getChild, getAdoptable, getSchools, getSchool } from "../../db/searchFunctions";
import { addChild, addRegd, deleteChild, updateChild } from "../../db/postFunctions";

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
    const child = await addChild(r.childphoto, r.childname, r.childgender,r.childfur, r.childtemp, r.childage, r.childweight, r.childdesc, r.childowner, r.is_castrated, r.is_adoptable, r.childobs);
    res.redirect("http://localhost:8080/admin");

}

export const dogadoptable = async (req: Request, res: Response) => {
    const dogs = await getAdoptable();
    res.json(dogs.content);
}


export const childdelete = async (req: Request, res: Response) => {
    const child = await deleteChild(req.params.child_id);
    res.json(child);
}

export const childupdate = async (req: Request, res: Response) => {
    const r = req.body;
    const child = await updateChild(req.params.child_id, r.childphoto, r.childname, r.childgender,r.childfur, r.childtemp, r.childage, r.childweight, r.childdesc, r.childowner, r.is_castrated, r.is_adoptable, r.childobs);
    res.redirect("http://localhost:8080/admin");
}


export const regdAdd = async (req: Request, res: Response) => {
    const dog = await addRegd(req.params.dog_id, req.body.is_fed, req.body.qt_fed, req.body.obs);
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


