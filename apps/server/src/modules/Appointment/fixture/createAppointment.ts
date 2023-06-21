import { Appointment, AppointmentDocument, AppointmentModel } from './../AppointmentModel';
import { DeepPartial } from "../../../../../../packages/types/src/DeepPartial";
import { getCounter } from "../../../../test/counters";
import { createUser } from '../../User/fixture/createUser';

export const createAppointment = async (args?: DeepPartial<Appointment>): Promise<AppointmentDocument> =>{
    const i = getCounter('appointment');

    const user = await createUser()


    return new AppointmentModel({
        clientName: `client#${i}`,
        service: `service-${i}`,
        date: `01-01-2021-${i}`,
        hour: `12:03am-${i}`,
        graphicLocation: `location-example-${i}`,
        _id: user._id,
        ...args
    }).save()
}

