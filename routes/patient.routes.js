import { Router } from 'express'
import { PatientController } from '../controllers/patient.controller.js'

export const createPatientRouter = ({ patientModel }) => {
  const patientRouter = Router()

  const patientController = new PatientController({ patientModel })

  // Obtener todos los pacientes
  patientRouter.get('/', patientController.get)

  // Obtener un servicio por ID
  patientRouter.get('/:id', patientController.getById) // Cambiado a getById

  // Crear un servicio
  patientRouter.post('/', patientController.post)

  // Actualizar un servicio por ID
  patientRouter.put('/:id', patientController.put)

  // Eliminar un servicio por ID
  patientRouter.delete('/:id', patientController.delete)

  return patientRouter
}
