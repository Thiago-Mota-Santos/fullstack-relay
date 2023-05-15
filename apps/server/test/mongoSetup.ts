import { moongoseDisconnect } from "./moongoseDisconnect";
import { mongooseConnection } from './mongooseConnection'

beforeAll(mongooseConnection);

afterAll(moongoseDisconnect);