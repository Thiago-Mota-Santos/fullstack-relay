import { GraphQLError } from 'graphql'

export interface UserRegisterMutationResult {
  userRegisterMutation: {
    token: string
    me: {
      id: string
      username: string
    }
  }
  errors?: ReadonlyArray<GraphQLError>
}

export interface UserLoginMutationResult {
  userLoginMutation: {
    token: string
    me?: {
      id?: string
    }
  }
  errors?: ReadonlyArray<GraphQLError>
}

export interface AppointmentDelete {
  AppointmentDelete: {
    success: string
  }
}

export interface AppointmentUpdate {
  appointmentUpdateMutation: {
    appointmentEdge: {
      node: {
        id: string
        clientName: string
        date: string
        hour: string
        graphicLocation: string
        service: string
      }
    }
  }
}

export interface AppointmentMutationResult {
  appointmentRegisterMutation: {
    appointmentEdge: {
      node: {
        clientName: string
        service: string
        date: string
        hour: string
        graphicLocation: string
      }
    }
  }
}

export interface getAppointment {
  appointments: {
    edges: {
      node: {
        id: string
        clientName: string
        service: string
        date: string
        hour: string
        graphicLocation: string
      }
    }
  }
}

export interface getUser {
  me: {
    id: string
  }
}
