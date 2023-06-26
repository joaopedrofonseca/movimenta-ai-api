import { prisma } from "../config/database.js";

async function create({ email, senha, nome }) {
    return await prisma.usuarios.create({
        data: {
            email, senha, nome
        }
    })
};

const authRepository = {
    create,
};

export default authRepository;