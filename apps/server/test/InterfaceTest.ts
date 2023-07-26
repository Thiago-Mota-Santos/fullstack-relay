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
    success: any
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
