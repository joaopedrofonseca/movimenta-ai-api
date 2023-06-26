import { prisma } from "../config/database.js";

export async function getList() {
    return await prisma.usuarios.findMany({});
}

const activitiesRepository = {
    getList,
};

export default activitiesRepository;