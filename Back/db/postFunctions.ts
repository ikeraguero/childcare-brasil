import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function addChild(childphoto: string, childname: string, childgender: string, childschool:string, childage: string, childaddress: string, childcity: string, childstate: string, childcpf:string, childdesc: string) {
    await prisma.$connect();
    const child = await prisma.child.create({
        data: {
            photo: childphoto,
            name: childname,
            gender: childgender,
            school: childschool,
            age: childage,
            address: childaddress,
            city: childcity, //change to string
            state: childstate,
            cpf: childcpf,
            description: childdesc
        }
    });
    await prisma.$disconnect();
};

export async function updateChild(child_id: string, childphoto: string, childname: string, childgender: string, childschool:string, childage: string, childaddress: string, childcity: string, childstate: string, childcpf:string, childdesc: string) {
    await prisma.$connect();
    const child = await prisma.child.update({
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
            city: childcity, //change to string
            state: childstate,
            cpf: childcpf,
            description: childdesc
        }
    });
    await prisma.$disconnect();
};

export async function deleteChild (child_id: string) {
    await prisma.$connect();
    const child = await prisma.child.delete({
        where: {
            id: child_id
        }
    });
    await prisma.$disconnect();
}

export async function addSchool(schoolemail: string, schoolcnpj: string, schoolcellphone: string, schoolphoto: string, schoolname: string, schooladdress: string, schoolcity: string, schoolstate: string) {
    await prisma.$connect();
    const school = await prisma.school.create({
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
    });
    await prisma.$disconnect();

};
export async function updateSchool(school_id: string, schoolemail: string, schoolcnpj: string, schoolcellphone: string, schoolphoto: string, schoolname: string, schooladdress: string, schoolcity: string, schoolstate: string) {
    await prisma.$connect();
    const school = await prisma.school.update({
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
    });
    await prisma.$disconnect();
};

export async function deleteSchool (school_id: string) {
    await prisma.$connect();
    const school = await prisma.school.delete({
        where: {
            id: school_id
        }
    });
    await prisma.$disconnect();
}



// Upload Image FUNCTION
export async function uploadImage(child_id: string, image: string) {
    await prisma.$connect();
    const child = await prisma.child.update({
        where: {
            id: child_id
        },
        data: {
            photo: image,
        }
    });
    await prisma.$disconnect();
}