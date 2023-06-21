import { clearDatabaseAndRestartCounters } from "../../../../test/clearDatabase";
import { mongooseConnection } from "../../../../test/mongooseConnection";
import { mongooseDisconnect } from "../../../../test/mongooseDisconnect";
import { UserRegisterMutationResult } from "../../../../test/InterfaceTest"
import { getGraphqlResult } from "../../../../test/getGraphqlResult"
import { schema } from "../../../schema/schema";


beforeAll(mongooseConnection);
beforeEach(clearDatabaseAndRestartCounters);
afterAll(mongooseDisconnect);


it('Should create user', async () => {
    const mutation = `
    mutation user($username: String!, $email: String!, $password: String!){
        userRegisterMutation(input: { username: $username, password: $password, email: $email }){
            token
            me{
               id
               username
            }
        }
  }
`
    const variableValues = {
        username: "joão",
        email: "joao@email.com",
        password: "s313s18747s41",

    }


      const result = await getGraphqlResult<UserRegisterMutationResult>
      ({ schema: schema, source: mutation, 
         variableValues: variableValues 
    })
    
    expect(result.errors).toBeUndefined();

    const { token, me } = result?.data?.userRegisterMutation!
    expect(token).toBeDefined();
    expect(me).toBeDefined();

})