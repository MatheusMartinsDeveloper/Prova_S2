import app from "./app.js";
import prisma from "./services/Prisma/prisma.service.js";

const PORT = 3000;

async function main() {
    try {
       await prisma.$connect();
       console.log("Connect to database"); 
    } catch (error) {
        console.error(`Error to connect in database!, error: ${error}`);
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log(`Server Running in port: ${PORT}`);
    });
}

main().catch((error) => {
    console.error(`Error to init server, error: ${error}`);
});