import { Types } from "mongoose";

export interface Appointment{
    clientName: string;
    date: string;
    hour: string;
    graphicLocation: string;
    service: "Internet" | "Xerox" | "Other" | "Banner";
    _id: Types.ObjectId;
}

