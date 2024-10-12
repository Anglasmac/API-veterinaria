import { OwnerSchema } from '../schemas/owner.schema.js'
import { ObjectId } from 'mongodb' // Asegúrate de importar ObjectId

export class OwnerModel {
  async get () {
    const data = await OwnerSchema.find()
    return data
  }
  async getById(id) {
    // Mongoose ya maneja la conversión de string a ObjectId internamente
    const data = await OwnerSchema.findById(id);
    return data
  }

  async post (obj) {
    const data = await new  OwnerSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id)
    const data = await OwnerSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Devolver el documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id)
    const data = await OwnerSchema.findOneAndDelete({ _id: objectId })
    return data
  }
}
