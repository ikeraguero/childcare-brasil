import { response } from "../lib/responseConstructor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Returns all dogs
export async function getChildren(){
    await prisma.$connect();
    const children = await prisma.child.findMany();
    
    if (!children) {
        prisma.$disconnect();
        return new response(503, "Children not found");
    }

    await prisma.$disconnect();
    return new response(200, "Children found", children)
}

// Returns specific dog
export async function getChild(child_id: string) {
    await prisma.$connect();
    const child = await prisma.child.findUnique({
        where:{
            id: child_id,
        },
    });
    if(!child){
        prisma.$disconnect();
        return new response(503, `Child ${child_id} not found!`);
    }
    await prisma.$disconnect();
    return new response(200, `Child ${child_id} found!`, child);
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
    const child = await prisma.child.findMany({
        where: {
            is_adoptable: "true"
        }
    });
    await prisma.$disconnect();
    return new response(200, "Children found", child);
}