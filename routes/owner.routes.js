import { Router } from 'express'
import { OwnerController } from '../controllers/owner.controller.js'

export const createOwnerRouter = ({ ownerModel }) => {
  const ownerRouter = Router()

  const ownerController = new OwnerController({ ownerModel })

  // Obtener todos los servicios
  ownerRouter.get('/', ownerController.get)

  // Obtener un servicio por ID
  ownerRouter.get('/:id', ownerController.getById) // Cambiado a getById

  // Crear un servicio
  ownerRouter.post('/', ownerController.post)

  // Actualizar un servicio por ID
  ownerRouter.put('/:id', ownerController.put)

  // Eliminar un servicio por ID
  ownerRouter.delete('/:id', ownerController.delete)

  return ownerRouter
}
