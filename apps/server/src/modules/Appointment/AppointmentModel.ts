import mongoose, { Document, Model, Types } from "mongoose";

export interface Appointment {
    clientName: string;
    date: string;
    hour: string;
    graphicLocation: string;
    service: "Internet" | "Xerox" | "Other" | "Banner";
    _id: Types.ObjectId;
}

export type AppointmentDocument = Document & Appointment

const AppointmentSchema = new mongoose.Schema<Appointment>(
    {
       clientName: {
        type: String,
        required: true,
        min: 3,
        max: 30,
        index: { unique: true }
       },
       date:{
        type: String,
        required: true,
       },
       hour: {
        type: String,
        required: true,
       },
       graphicLocation:{
        type: String,
        required: true,
        min: 5,
        max: 60
       },
       service:{
        type: String,
        required: true,
       }
    }
)

const AppointmentModel = Model<Appointment> = mongoose.models["Appointment"] || mongoose.model("Appointment", AppointmentSchema);
    
export default AppointmentModel;