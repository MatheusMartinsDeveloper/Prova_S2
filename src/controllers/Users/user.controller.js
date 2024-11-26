import { createUser } from "../../services/Users/users.service.js";

async function create(request, response) {
    const userData = request.body;

    if (!userData) {
        return response.status(401).json({ message: "User data not exist!" });
    }

    try {
        const sendData = await createUser(userData);

        response.status(201).json(sendData);
    } catch (error) {
        response.status(401).json({ message: "Error to create new user!", error: error.message });
    }
}

export default { create }