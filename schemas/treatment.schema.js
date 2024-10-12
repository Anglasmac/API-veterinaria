import { Schema, model } from 'mongoose';

const treatmentSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }, // Referencia al paciente
  description: { type: String, required: true },                           // Descripción del tratamiento
  medications: [{                                                          // Lista de medicamentos
    name: String,                                                          // Nombre del medicamento
    dosage: String                                                         // Dosis del medicamento
  }],
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export const TreatmentSchema = model('Treatment', treatmentSchema);
