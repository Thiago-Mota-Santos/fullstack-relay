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

    const { clientName, graphicLocation, service, date, hour } = await createAppointment({
        clientName: 'Thiago',
        date: '23-01-2022',
        hour: '18:03',
        graphicLocation: 'satelite-iris-3',
        service: 'Banner',
    })


    const mutation = `
    mutation appointment($clientName: String!, $date: String!, $hour: String!, $graphicLocation: String!, $service: String!){            
        appointmentRegisterMutation(input: { clientName: $clientName, date: $date, hour: $hour, graphicLocation: $graphicLocation, service: $service}){
          appointmentEdge{
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
    }


    const result = await graphql({
        schema: schema,
        source: mutation,
        variableValues: variableValues,
        contextValue: getContext ({ user }),
    }) as any;


    expect(result.errors).toBeUndefined();

    const { appointmentEdge } = result?.data?.appointmentRegisterMutation
    expect(appointmentEdge.node.clientName).toBe(variableValues.clientName);
    expect(appointmentEdge.node.service).toBe(variableValues.service);
    expect(appointmentEdge.node.date).toBe(variableValues.date);
    expect(appointmentEdge.node.hour).toBe(variableValues.hour);
    expect(appointmentEdge.node.graphicLocation).toBe(variableValues.graphicLocation);





})