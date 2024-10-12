import { Router } from 'express'
import { BillingController } from '../controllers/billing.controller.js'

export const createBillingRouter = ({ billingModel }) => {
  const billingRouter = Router()

  const billingController = new BillingController({ billingModel })

  // Obtener todos los servicios
  billingRouter.get('/', billingController.get)

  // Obtener un servicio por ID
  billingRouter.get('/:id', billingController.getById) // Cambiado a getById

  // Crear un servicio
  billingRouter.post('/', billingController.post)

  // Actualizar un servicio por ID
  billingRouter.put('/:id', billingController.put)

  // Eliminar un servicio por ID
  billingRouter.delete('/:id', billingController.delete)

  return billingRouter
}
