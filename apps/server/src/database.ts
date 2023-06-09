import mongoose from 'mongoose';

import { config } from './config';

async function connectDatabase(){
    mongoose.connection
        .once('open', () => console.log('Database connected'))
        .on('error', err => console.log(err))
        .on('close', () => console.log('Database closed'));

    await mongoose.connect(config.MONGO_URI);
}

export { connectDatabase };