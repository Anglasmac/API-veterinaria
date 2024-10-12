import { Router } from 'express'
import { TreatmentController } from '../controllers/treatment.controller.js'

export const createTreatmentRouter = ({ treatmentModel }) => {
  const treatmentRouter = Router()

  const treatmentController = new TreatmentController({ treatmentModel })

  // Obtener todos los pacientes
  treatmentRouter.get('/', treatmentController.get)

  // Obtener un servicio por ID
  treatmentRouter.get('/:id', treatmentController.getById) // Cambiado a getById

  // Crear un servicio
  treatmentRouter.post('/', treatmentController.post)

  // Actualizar un servicio por ID
  treatmentRouter.put('/:id', treatmentController.put)

  // Eliminar un servicio por ID
  treatmentRouter.delete('/:id', treatmentController.delete)

  return treatmentRouter
}
