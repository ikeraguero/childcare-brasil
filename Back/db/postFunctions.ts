import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function addChild(childphoto: string, childname: string, childgender: string, childfur:string, childtemp: string, childage: string, childweight: string, childdesc: string, childowner:string, is_castrated: string, is_adoptable: string, childobs: string) {
    await prisma.$connect();
    const child = await prisma.child.create({
        data: {
            photo: childphoto,
            name: childname,
            gender: childgender,
            fur: childfur,
            temperament: childtemp,
            age: childage,
            weight: childweight, //change to string
            description: childdesc,
            owner_name: childowner,
            is_castrated: is_castrated,
            is_adoptable: is_adoptable,
            observations: childobs,
        }
    });
    await prisma.$disconnect();
};

export async function updateChild(child_id: string, childphoto: string, childname: string, childgender: string, childfur:string, childtemp: string, childage: string, childweight: string, childdesc: string, childowner:string, is_castrated: string, is_adoptable: string, childobs: string) {
    await prisma.$connect();
    const child = await prisma.child.update({
        where: {
            id: child_id
        },
        data: {
            photo: childphoto,
            name: childname,
            gender: childgender,
            fur: childfur,
            temperament: childtemp,
            age: childage,
            weight: childweight, //change to string
            description: childdesc,
            owner_name: childowner,
            is_castrated: is_castrated,
            is_adoptable: is_adoptable,
            observations: childobs,
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

export async function addSchool(schoolphoto: string, schoolname: string, schooladdress: string, schoolcity: string, schoolstate: string) {
    await prisma.$connect();
    const school = await prisma.school.create({
        data: {
            photo: schoolphoto,
            name: schoolname,
            address: schooladdress,
            city: schoolcity,
            state: schoolstate
        }
    });
    await prisma.$disconnect();

};
export async function updateSchool(school_id: string, schoolphoto: string, schoolname: string, schooladdress: string, schoolcity: string, schoolstate: string) {
    await prisma.$connect();
    const school = await prisma.school.update({
        where: {
            id: school_id
        },
        data: {
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