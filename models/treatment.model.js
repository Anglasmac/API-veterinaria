import { TreatmentSchema } from '../schemas/treatment.schema.js'
import { ObjectId } from 'mongodb' // Asegúrate de importar ObjectId

export class TreatmentModel {
  async get () {
    const data = await  TreatmentSchema.find()
    return data
  }

  async getById(id) {
    // Mongoose ya maneja la conversión de string a ObjectId internamente
    const data = await TreatmentSchema.findById(id);
    return data
  }


  async post (obj) {
    const data = await new  TreatmentSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id)
    const data = await TreatmentSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Devolver el documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id)
    const data = await TreatmentSchema.findOneAndDelete({ _id: objectId })
    return data
  }
}
