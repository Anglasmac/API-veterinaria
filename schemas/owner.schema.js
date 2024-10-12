import { Schema, model } from 'mongoose'

const ownerSchema = new Schema({
  fullName: { type: String, required: true },              // Nombre completo del propietario
  phone: { type: String, required: true },                 // Teléfono de contacto
  email: { type: String, required: true, unique: true },   // Correo electrónico (único)
  address: { type: String }                                // Dirección
}, { timestamps: true }); 

export const OwnerSchema = model('Owner', ownerSchema)



