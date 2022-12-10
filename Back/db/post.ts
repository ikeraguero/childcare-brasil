import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function addChild(childphoto: string, childname: string, childgender: string, childschool:string, childage: string, childaddress: string, childcity: string, childstate: string, childcpf:string, childmaterialsneeded: string, childresponsables: string) {
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
            materialsneeded: childmaterialsneeded,
            responsables: childresponsables
        }
    });
    await prisma.$disconnect();
};

export async function updateChild(child_id: string, childphoto: string, childname: string, childgender: string, childschool:string, childage: string, childaddress: string, childcity: string, childstate: string, childcpf:string, childmaterialsneeded: string, childresponsables: string) {
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
            city: childcity,
            state: childstate,
            cpf: childcpf,
            materialsneeded: childmaterialsneeded,
            responsables: childresponsables
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

export async function addSchool(schoolemail: string, schoolinepcode: string, schoolcellphone: string, schoolphoto: string, schoolname: string, schooladdress: string, schoolcity: string, schoolstate: string, schoolmaterialsneeded: string, schooldirector: string)  {
    await prisma.$connect();
    const school = await prisma.school.create({
        data: {
            email: schoolemail,
            inepcode: schoolinepcode,
            cellphone: schoolcellphone,
            photo: schoolphoto,
            name: schoolname,
            address: schooladdress,
            city: schoolcity,
            state: schoolstate,
            materialsneeded: schoolmaterialsneeded,
            director: schooldirector
        }
    });
    await prisma.$disconnect();

};
export async function updateSchool(school_id: string, schoolemail: string, schoolinepcode: string, schoolcellphone: string, schoolphoto: string, schoolname: string, schooladdress: string, schoolcity: string, schoolstate: string, schoolmaterialsneeded: string, schooldirector: string) {
    await prisma.$connect();
    const school = await prisma.school.update({
        where: {
            id: school_id
        },
        data: {
            email: schoolemail,
            inepcode: schoolinepcode,
            cellphone: schoolcellphone,
            photo: schoolphoto,
            name: schoolname,
            address: schooladdress,
            city: schoolcity,
            state: schoolstate,
            materialsneeded: schoolmaterialsneeded,
            director: schooldirector
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
export async function addDonation(donationdonatortype:string, donationdonator: string, donationemail: string, donationcpf: string, donationcnpj: string, donationcellphone: string, donationtype: string, donationvalue:string, donationmaterials: string, donationdonatedto: string, donationdonatedtoid: string, donationstatus: string) {
    await prisma.$connect();
    const donation = await prisma.donation.create({
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
    });
    await prisma.$disconnect();
};

export async function deleteDonation (donation_id: string) {
    await prisma.$connect();
    const donation = await prisma.donation.delete({
        where: {
            id: donation_id
        }
    });
    await prisma.$disconnect();
}

export async function updateDonation(donation_id: string, donationdonatortype:string, donationdonator: string, donationemail: string, donationcpf: string, donationcnpj: string, donationcellphone: string, donationtype: string, donationvalue:string, donationmaterials: string, donationdonatedto: string, donationdonatedtoid: string, donationstatus: string) {
    await prisma.$connect();
    const donation = await prisma.donation.update({
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
    });
    await prisma.$disconnect();
};