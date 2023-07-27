import { ROOT_ID, RecordSourceSelectorProxy, graphql } from 'relay-runtime'
import { connectionDeleteUpdater } from '../../utils/connectionDeleteUpdater'

const AppointmentDelete = graphql`
  mutation AppointmentDeleteMutation($input: AppointmentDeleteInput!) {
    AppointmentDelete(input: $input) {
      appointmentId
      success
    }
  }
`
const updaterDelete =
  (nodeId: string) => (store: RecordSourceSelectorProxy) => {
    connectionDeleteUpdater({
      store,
      parentId: ROOT_ID,
      connectionName: 'AppointmentList_appointments',
      nodeId,
    })
  }

export { AppointmentDelete, updaterDelete }
