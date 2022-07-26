import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
    const children = await prisma.children.create({
        data: {
            cpf: "07714937971",
            school: "Plácido Xavier Vieira",
            name: "Iker",
            surname: "Aguero Pires",
            address: "Rua Dona Cezarina, 101",
            photo: "https://ibb.co/2dBVx1d",
            description: "Smart Kid",
            age: "17"
        }
    });
    console.log(children)
}

main();