import { createLoader } from '@entria/graphql-mongo-helpers';

import { registerLoader } from '../loader/loaderRegister';
import AppointmentModel from './AppointmentModel';

const { Wrapper, getLoader, clearCache, load, loadAll} = createLoader({
    model: AppointmentModel,
    loaderName: 'AppointmentLoader',
});


export const AppointmentLoader = {
    Appointment: Wrapper,
    getLoader,
    clearCache,
    load,
    loadAll
}

registerLoader("AppointmentLoader", getLoader);
