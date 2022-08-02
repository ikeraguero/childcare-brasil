import { response } from "../lib/responseConstructor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Returns all dogs
export async function getDogs(){
    await prisma.$connect();
    const dogs = await prisma.dog.findMany();
    
    if (!dogs) {
        prisma.$disconnect();
        return new response(503, "Dogs not found");
    }

    await prisma.$disconnect();
    return new response(200, "Dogs found", dogs)
}

// Returns specific dog
export async function getDog(dog_id: string) {
    await prisma.$connect();
    const dog = await prisma.dog.findUnique({
        where:{
            id: dog_id,
        },
    });
    if(!dog){
        prisma.$disconnect();
        return new response(503, `Dog ${dog_id} not found!`);
    }
    await prisma.$disconnect();
    return new response(200, `Dog ${dog_id} found!`, dog);
}
// Returns all schools
export async function getSchools(){
    await prisma.$connect();
    const schools = await prisma.school.findMany();
    
    if (!schools) {
        prisma.$disconnect();
        return new response(503, "Schools not found");
    }

    await prisma.$disconnect();
    return new response(200, "Schools found", schools)
}

// Returns specific dog
export async function getSchool(school_id: string) {
    await prisma.$connect();
    const school = await prisma.school.findUnique({
        where:{
            id: school_id,
        },
    });
    if(!school){
        prisma.$disconnect();
        return new response(503, `School ${school_id} not found!`);
    }
    await prisma.$disconnect();
    return new response(200, `School ${school_id} found!`, school);
}

export async function getAdoptable() {
    await prisma.$connect();
    const dog = await prisma.dog.findMany({
        where: {
            is_adoptable: "true"
        }
    });
    await prisma.$disconnect();
    return new response(200, "Dogs found", dog);
}