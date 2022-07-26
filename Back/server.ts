import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
    const children = await prisma.children.create({
        data: {
            cpf:"07714937971",
            escola:"Plácido Xavier Vieira",
            nome: "Iker",
            sobrenome: "Aguero Pires",
            endereco: "Rua Dona Cezarina, 101"

        }
    });
    console.log(children)
}

main();