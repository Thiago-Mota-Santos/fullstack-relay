import { mongooseConnection } from './mongooseConnection'
import { mongooseDisconnect } from './mongooseDisconnect';

beforeAll(mongooseConnection);

afterAll(mongooseDisconnect);