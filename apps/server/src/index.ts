import { app } from "./app";
import { config } from "./config";
import { connectDatabase } from "./database"
import { createServer } from "http";


(async () => {
    await connectDatabase();

    const server = createServer(app.callback());

    server.listen(config.PORT, () => {
        console.log(`server running - PORT:  ${config.PORT}`)
    })
})();