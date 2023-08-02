import mongoose from 'mongoose'
import 'dotenv/config'

const URI = process.env.MONGO_URI as string

async function connectDatabase() {
  mongoose.connection
    .once('open', () => console.log('Database connected'))
    .on('error', (err) => console.log(err))
    .on('close', () => console.log('Database closed'))

  await mongoose.connect(URI)
}

export { connectDatabase }
