import { createAppointment } from './../fixture/createAppointment';
import { clearDatabaseAndRestartCounters } from "../../../../test/clearDatabase";
import { mongooseConnection } from "../../../../test/mongooseConnection";
import { mongooseDisconnect } from "../../../../test/mongooseDisconnect";
import { graphql } from 'graphql';
import { schema } from '../../../schema/schema';
import { getContext } from '../../../getContext';
import { createUser } from '../../User/fixture/createUser';

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it("should register a appointment", async() => {

    const user = await createUser()

    const { clientName, graphicLocation, service, date, hour, _id } = await createAppointment({
        clientName: 'Thiago',
        date: '23-01-2022',
        hour: '18:03',
        graphicLocation: 'satelite iris 3',
        service: 'Banner',
        _id: "5fa07f5e2ac4c50984ceae20",
    })


    const mutation = `
    mutation appointment($clientName: String!, $date: String!, $hour: String!, $graphicLocation: String!, $service: String!){            
        appointmentRegisterMutation(input: { clientName: $clientName, date: $date, hour: $hour, graphicLocation: $graphicLocation, service: $service}){
          me{
            node{
              clientName
              service
              date
              hour
              graphicLocation
            }
          }
        }
      }
    `

    const variableValues = {
        clientName: clientName,
        service: service,
        date,
        hour,
        graphicLocation,
        _id
    }


    const result = await graphql({
        schema: schema,
        source: mutation,
        variableValues: variableValues,
        contextValue: getContext ({ user })
    })

    console.log(getContext({ user }));


    expect(result.errors).toBeUndefined();

    const { me } = result?.data?.appointmentRegisterMutation
    expect(me?.node.clientName).toBeDefined();

})