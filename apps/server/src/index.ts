import 'dotenv/config'
import { app } from './app'
import { connectDatabase } from './database'
import { createServer } from 'http'
;(async () => {
  await connectDatabase()
  const PORT = process.env.PORT as string
  const server = createServer(app.callback())
  console.log(PORT)
  server.listen(PORT, () => {
    console.log('Server is running')
  })
})()
