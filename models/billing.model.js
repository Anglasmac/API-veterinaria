import { BillingSchema } from '../schemas/billing.schema.js'
import { ObjectId } from 'mongodb' // Asegúrate de importar ObjectId

export class BillingModel {
  async get () {
    const data = await  BillingSchema.find()
    return data
  }
  async getById(id) {
    // Mongoose ya maneja la conversión de string a ObjectId internamente
    const data = await BillingSchema.findById(id);
    return data
  }
 

  async post (obj) {
    const data = await new  BillingSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id)
    const data = await BillingSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Devolver el documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id)
    const data = await BillingSchema.findOneAndDelete({ _id: objectId })
    return data
  }
}
