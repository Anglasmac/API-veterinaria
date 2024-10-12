export class TreatmentController {
    constructor ({ treatmentModel }) {
      this.treatmentModel = treatmentModel
    }
  
    get = async (req, res) => {
      try {
        const data = await this.treatmentModel.get()
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los treatment' })
      }
    }
  
    getById = async (req, res) => {
      try {
        const data = await this.treatmentModel.getById(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'treatment no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al obtener el treatment' })
      }
    }
  
    post = async (req, res) => {
      try {
        const data = await this.treatmentModel.post(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el treatment' })
      }
    }
  
    put = async (req, res) => {
      try {
        const data = await this.treatmentModel.put(req.params.id, req.body)
        if (!data) {
          return res.status(404).json({ error: 'treatment no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al actualizar el treatment' })
      }
    }
  
    delete = async (req, res) => {
      try {
        const data = await this.treatmentModel.delete(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'treatment no encontrado' })
        }
        res.status(200).json({ error: 'treatment  eliminado correctamente' })
      } catch {
        res.status(500).json({ error: 'Error al eliminar el treatment' })
      }
    }
  }
  