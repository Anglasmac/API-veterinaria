export class OwnerController {
    constructor ({ ownerModel }) {
      this.ownerModel = ownerModel
    }
  
    get = async (req, res) => {
      try {
        const data = await this.ownerModel.get()
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los owner' })
      }
    }
  
    getById = async (req, res) => {
      try {
        const data = await this.ownerModel.getById(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'owner no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al obtener el owner' })
      }
    }
  
    post = async (req, res) => {
      try {
        const data = await this.ownerModel.post(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el owner' })
      }
    }
  
    put = async (req, res) => {
      try {
        const data = await this.ownerModel.put(req.params.id, req.body)
        if (!data) {
          return res.status(404).json({ error: 'owner no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al actualizar el owner' })
      }
    }
  
    delete = async (req, res) => {
      try {
        const data = await this.ownerModel.delete(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'owner no encontrado' })
        }
        res.status(200).json({ error: 'owner  eliminado correctamente' })
      } catch {
        res.status(500).json({ error: 'Error al eliminar el owner' })
      }
    }
  }
  