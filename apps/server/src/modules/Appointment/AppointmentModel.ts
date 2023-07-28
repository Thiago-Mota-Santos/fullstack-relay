import mongoose, { Document, Schema, Types } from 'mongoose'
import { Maybe } from '../../../../../packages/types/src/Maybe'

export interface Appointment {
  _id: Types.ObjectId
  clientName: string
  date: string
  hour: string
  graphicLocation: string
  service: string
}

export type AppointmentDocument = Maybe<Appointment> & Document

const AppointmentSchema = new mongoose.Schema<Appointment>(
  {
    clientName: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      index: { unique: true },
    },
    date: {
      type: String,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    graphicLocation: {
      type: String,
      required: true,
      min: 5,
      max: 60,
    },
    service: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'Appointment',
  },
)

export const AppointmentModel = mongoose.model<AppointmentDocument>(
  'Appointment',
  AppointmentSchema,
)
