import { Router } from 'express'
import { AppointmentController } from '../controllers/appointment.controller.js'

export const createAppointmentRouter = ({ appointmentModel }) => {
  const appointmentRouter = Router()

  const appointmentController = new AppointmentController({ appointmentModel })

  // Obtener todos los servicios
  appointmentRouter.get('/', appointmentController.get)

  // Obtener un servicio por ID
  appointmentRouter.get('/:id', appointmentController.getById) // Cambiado a getById

  // Crear un servicio
  appointmentRouter.post('/', appointmentController.post)

  // Actualizar un servicio por ID
  appointmentRouter.put('/:id', appointmentController.put)

  // Eliminar un servicio por ID
  appointmentRouter.delete('/:id', appointmentController.delete)

  return appointmentRouter
}
