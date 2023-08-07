import 'dotenv/config'
import { connectDatabase } from './database'
import { createServer } from 'http'
import { app } from './api/app'
;(async () => {
  await connectDatabase()
  const PORT = process.env.PORT as string
  const server = createServer(app.callback())
  console.log(PORT)
  server.listen(PORT, () => {
    console.log('Server is running')
  })
})()
