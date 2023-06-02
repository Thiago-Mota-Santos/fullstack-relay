import { createLoader } from '@entria/graphql-mongo-helpers';

import { registerLoader } from '../loader/loaderRegister';
import AppointmentModel from './AppointmentModel';

const { Wrapper, getLoader, clearCache, load, loadAll} = createLoader({
    model: AppointmentModel,
    loaderName: 'AppointmentLoader',
});

registerLoader("AppointmentLoader", getLoader);

export const AppointmentLoader = {
    User: Wrapper,
    getLoader,
    clearCache,
    load,
    loadAll
}