import Koa from 'koa'
import cors from 'kcors';


const app = new Koa();

app.use(cors({ origin: '*'}));
app.use(async (ctx) => {
    ctx.body = "hello world"
})

app.listen(3333, () => console.log('server is running'));