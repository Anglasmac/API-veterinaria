import { AppointmentSchema } from '../schemas/appointment.schema.js'
import { ObjectId } from 'mongodb' // Asegúrate de importar ObjectId

export class AppointmentModel {
  async get () {
    const data = await AppointmentSchema.find()
    return data
  }
  async getById(id) {
    // Mongoose ya maneja la conversión de string a ObjectId internamente
    const data = await AppointmentSchema.findById(id);
    return data
  }


  async post (obj) {
    const data = await new AppointmentSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const objectId = new ObjectId(id)
    const data = await AppointmentSchema.findOneAndUpdate({ _id: objectId }, obj, { new: true }) // Devolver el documento actualizado
    return data
  }

  async delete (id) {
    const objectId = new ObjectId(id)
    const data = await AppointmentSchema.findOneAndDelete({ _id: objectId })
    return data
  }
}
