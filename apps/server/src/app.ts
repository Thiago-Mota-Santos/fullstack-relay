import Koa from 'koa'
import cors from 'kcors';
import logger from 'koa-logger'


const app = new Koa();

app.use(cors({ origin: '*'}));
app.use(async (ctx) => {
    ctx.body = "hello world"
})

app.use(logger)

app.listen(3333, () => console.log('server is running'));


export { app }