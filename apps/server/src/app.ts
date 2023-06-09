import Koa, { Request, Response, Context} from 'koa'
import logger from 'koa-logger'
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';
import { OptionsData, graphqlHTTP } from 'koa-graphql'
import { getUser } from './Auth';
import { schema } from './schema/schema';
import { getContext } from './getContext';
import Router from 'koa-router';


const app = new Koa();
const router = new Router();


const graphQlSettingsPerReq = async(_req: Request, _res: Response, ctx: Context): Promise<OptionsData> => {
    const { user } = await getUser(ctx);

    return{
        graphiql: true,
        schema,
        pretty: true,
        context: await getContext({ ctx, user })
    }
}

const graphQlServer = graphqlHTTP(graphQlSettingsPerReq);

router.all('/graphql', graphQlServer);

app.use(cors({ origin: '*' }));
app.use(logger);
app.use(bodyParser({
    onerror(err, ctx){
        ctx.throw(err, 422);
    }
}));


export { app }