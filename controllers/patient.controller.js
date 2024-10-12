export class PatientController {
    constructor ({ patientModel }) {
      this.patientModel = patientModel
    }
  
    get = async (req, res) => {
      try {
        const data = await this.patientModel.get()
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los patient' })
      }
    }
  
    getById = async (req, res) => {
      try {
        const data = await this.patientModel.getById(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'patient no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al obtener el patient' })
      }
    }
  
    post = async (req, res) => {
      try {
        const data = await this.patientModel.post(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el patient' })
      }
    }
  
    put = async (req, res) => {
      try {
        const data = await this.patientModel.put(req.params.id, req.body)
        if (!data) {
          return res.status(404).json({ error: 'patient no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al actualizar el patient' })
      }
    }
  
    delete = async (req, res) => {
      try {
        const data = await this.patientModel.delete(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'patient no encontrado' })
        }
        res.status(200).json({ error: 'patient  eliminado correctamente' })
      } catch {
        res.status(500).json({ error: 'Error al eliminar el patient' })
      }
    }
  }
  