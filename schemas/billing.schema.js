import { Schema, model } from 'mongoose'
const billingSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true },     // Referencia al propietario
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }, // Referencia al paciente
    treatments: [{ type: Schema.Types.ObjectId, ref: 'Treatment' }],          // Lista de tratamientos
    totalAmount: { type: Number, required: true },                                     // Total a pagar
    paymentStatus: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },    // Estado del pago
    date: { type: Date, default: Date.now }
},  { timestamps: true });   

export const BillingSchema = model('Billing', billingSchema)




