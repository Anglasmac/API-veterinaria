export class BillingController {
    constructor ({ billingModel }) {
      this.billingModel = billingModel
    }
  
    get = async (req, res) => {
      try {
        const data = await this.billingModel.get()
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los billing' })
      }
    }
  
    getById = async (req, res) => {
      try {
        const data = await this.billingModel.getById(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'billing no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al obtener el billing' })
      }
    }
  
    post = async (req, res) => {
      try {
        const data = await this.billingModel.post(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el billing' })
      }
    }
  
    put = async (req, res) => {
      try {
        const data = await this.billingModel.put(req.params.id, req.body)
        if (!data) {
          return res.status(404).json({ error: 'billing no encontrado' })
        }
        res.status(200).json(data)
      } catch {
        res.status(500).json({ error: 'Error al actualizar el billing' })
      }
    }
  
    delete = async (req, res) => {
      try {
        const data = await this.billingModel.delete(req.params.id)
        if (!data) {
          return res.status(404).json({ error: 'billing no encontrado' })
        }
        res.status(200).json({ error: 'billing  eliminado correctamente' })
      } catch {
        res.status(500).json({ error: 'Error al eliminar el billing' })
      }
    }
  }
  