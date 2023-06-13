import { graphql } from "graphql";
import { clearDatabaseAndRestartCounters } from "../../../../test/clearDatabase";
import { mongooseConnection } from "../../../../test/mongooseConnection";
import { mongooseDisconnect } from "../../../../test/mongooseDisconnect";
import { schema } from "../../../schema/schema";
import { getContext } from "../../../getContext";


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
        username: "thiago",
        email: "poggers@email.com",
        password: "noggers",

    }

    const context = getContext()

    const result = await graphql({
        schema,
        source: mutation,
        rootValue: {},
        variableValues,        
        contextValue: context
      });

    expect(result.errors).toBeUndefined();

    //@ts-ignore
    const { me, token } = result?.data?.UserRegisterMutation

    expect(token).toBeUndefined();
    expect(me.id).toBeUndefined();

})

