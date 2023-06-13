import { graphql, ExecutionResult, GraphQLError } from "graphql";
import { clearDatabaseAndRestartCounters } from "../../../../test/clearDatabase";
import { mongooseConnection } from "../../../../test/mongooseConnection";
import { mongooseDisconnect } from "../../../../test/mongooseDisconnect";
import { schema } from "../../../schema/schema";
import { UserRegisterMutationResult } from "./types/UserTestType";


beforeAll(mongooseConnection);
beforeEach(clearDatabaseAndRestartCounters);
afterAll(mongooseDisconnect);


it('Should create user', async () => {
    const mutation = `
    mutation user($username: String!, $email: String!, $password: String!){
        UserRegisterMutation(input: { username: $username, password: $password, email: $email }){
            token
            me{
               id
               username
            }
        }
  }
`
    const variableValues = {
        username: "kssnbek",
        email: "joggesssrs@pog0igers.net",
        password: "s313s18747s41",

    }

    const result = await graphql({
        schema,
        source: mutation,
        rootValue: {},
        variableValues,        
      }) as UserRegisterMutationResult;
    
    expect(result.errors).toBeUndefined();

    const { me, token } = result?.data?.UserRegisterMutation

    expect(token).toBeDefined();
    expect(me.id).toBeDefined();

})

