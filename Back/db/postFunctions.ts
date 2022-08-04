import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function addChild(childphoto: string, childname: string, childgender: string, childschool:string, childage: string, childaddress: string, childcity: string, childstate: string, childcpf:string, is_castrated: string, is_adoptable: string, childdesc: string) {
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
            is_castrated: is_castrated,
            is_adoptable: is_adoptable,
            description: childdesc
        }
    });
    await prisma.$disconnect();
};

export async function updateChild(child_id: string, childphoto: string, childname: string, childgender: string, childschool:string, childage: string, childaddress: string, childcity: string, childstate: string, childcpf:string, is_castrated: string, is_adoptable: string, childdesc: string) {
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
            is_castrated: is_castrated,
            is_adoptable: is_adoptable,
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
// arrumar isso
export async function addRegd(dog_id: string, is_fed: string, qt_fed: string, obs: string) {
    prisma.$connect;
    const dog = await prisma.daily.create({
        data: {
            dog_id: dog_id,
            is_fed: is_fed,
            qt_fed: qt_fed,
            observations: obs,
            date: new Date()
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