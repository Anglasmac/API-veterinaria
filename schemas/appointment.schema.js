import { Schema, model } from 'mongoose'
const appointmentSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }, // Referencia al paciente
    date: { type: Date, required: true },                    // Fecha y hora de la cita
    reason: { type: String, required: true },                // Razón de la cita
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' } // Estado de la cita
  }, { timestamps: true }); 

export const AppointmentSchema = model('Appointment', appointmentSchema)




