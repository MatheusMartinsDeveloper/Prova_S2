import prisma from "../Prisma/prisma.service.js";
import bcrypt from "bcrypt";

export async function createUser(userData) {
    const { password } = userData;

    const saltPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltPassword);

    try {
        const addNewUser = await prisma.users.create({
            data: {
                ...userData,
                password: hashPassword
            }
        });

        return addNewUser;
    } catch (error) {
        throw Error(`Error to create user: ${error}`);
    }
}