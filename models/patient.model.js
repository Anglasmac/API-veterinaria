import { PatientSchema } from '../schemas/patient.schema.js'
import { ObjectId } from 'mongodb' // Asegúrate de importar ObjectId

export class PatientModel {
  async get () {
    const data = await PatientSchema.find()
    return data
  }
  async getById(id) {
    // Mongoose ya maneja la conversión de string a ObjectId internamente
    const data = await PatientSchema.findById(id);
    return data
  }

  async post (obj) {
    const data = await new  PatientSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id)
    const data = await PatientSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Devolver el documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id)
    const data = await PatientSchema.findOneAndDelete({ _id: objectId })
    return data
  }
}
