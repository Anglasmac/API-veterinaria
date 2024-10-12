import { Schema, model } from 'mongoose'
const patientSchema = new Schema({
  id_patient: Number,
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number },
  weight: { type: Number },
  owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true }

  
})

export const PatientSchema = model('Patient', patientSchema)