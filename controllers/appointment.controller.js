export class AppointmentController {
    constructor ({ appointmentModel }) {
      this.appointmentModel = appointmentModel
    }
  
    get = async (req, res) => {
      try {
        const data = await this.appointmentModel.get()
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los appointment' })
      }
    }
  
    getById = async (req, res) => {
      try {
        const data = await this.appointmentModel.getById(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'appointment no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al obtener el appointment' })
      }
    }
  
    post = async (req, res) => {
      try {
        const data = await this.appointmentModel.post(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el appointment' })
      }
    }
  
    put = async (req, res) => {
      try {
        const data = await this.appointmentModel.put(req.params.id, req.body)
        if (!data) {
          return res.status(404).json({ error: 'appointment no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al actualizar el appointment' })
      }
    }
  
    delete = async (req, res) => {
      try {
        const data = await this.appointmentModel.delete(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'appointment no encontrado' })
        }
        res.status(200).json({ error: 'appointment  eliminado correctamente' })
      } catch {
        res.status(500).json({ error: 'Error al eliminar el appointment' })
      }
    }
  }
  