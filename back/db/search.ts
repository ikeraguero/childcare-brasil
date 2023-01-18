import { response } from "../lib/responseConstructor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all children
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

//get specific child

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

//get all schools

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

//get specific school

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

//get all donations
export async function getDonations(){
    await prisma.$connect();
    const donations = await prisma.donation.findMany();
    
    if (!donations) {
        prisma.$disconnect();
        return new response(503, "Donations not found");
    }

    await prisma.$disconnect();
    return new response(200, "Donations found", donations)
}

//get specific donation

export async function getDonation(donation_id: string) {
    await prisma.$connect();
    const donation = await prisma.donation.findUnique({
        where:{
            id: donation_id,
        },
    });
    if(!donation){
        prisma.$disconnect();
        return new response(503, `Donation ${donation_id} not found!`);
    }
    await prisma.$disconnect();
    return new response(200, `Donation ${donation_id} found!`, donation);
}

//get all states
export async function getStates(){
    await prisma.$connect();
    const states = await prisma.state.findMany();
    
    if (!states) {
        prisma.$disconnect();
        return new response(503, "States not found");
    }

    await prisma.$disconnect();
    return new response(200, "States found", states)
}

//get specific state

export async function getState(state_id: string) {
    await prisma.$connect();
    const state = await prisma.state.findUnique({
        where:{
            id: state_id,
        },
    });
    if(!state){
        prisma.$disconnect();
        return new response(503, `Child ${state_id} not found!`);
    }
    await prisma.$disconnect();
    return new response(200, `Child ${state_id} found!`, state);
}
