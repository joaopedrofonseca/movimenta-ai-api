import { prisma } from "config/database"

async function create({ email, password, name }) {
    return prisma.usuarios.create({
        data: {
            email,
            nome: name,
            senha: password,
        }
    })
};

const authRepository = {
    create,
};

export default authRepository;