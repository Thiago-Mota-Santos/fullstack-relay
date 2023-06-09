import { config } from "./config";
import { app } from './app'
import { connectDatabase } from "./database"
import http from 'http';


(async () => {
    await connectDatabase();

    const server = http.createServer(app.callback());

    server.listen(config.PORT, () => {
        console.log(`server running - PORT:  ${config.PORT}`)
    })
})