import { Server } from './models/server.js'



// routes
import { createAppointmentRouter } from './routes/appointment.routes.js'
import { createBillingRouter } from './routes/billing.routes.js'
import { createOwnerRouter } from './routes/owner.routes.js'
import { createPatientRouter } from './routes/patient.routes.js'
import { createTreatmentRouter } from './routes/treatment.routes.js'


// models
import { AppointmentModel } from './models/appointment.model.js'
import {BillingModel } from './models/billing.model.js'
import { OwnerModel } from './models/owner.model.js'
import { PatientModel } from './models/patient.model.js'
import { TreatmentModel } from './models/treatment.model.js'


import './config/db.mongo.js'

const server = new Server()
// const authModel = new AuthModel();
const appointmentModel = new AppointmentModel()
const billingModel = new BillingModel()
const ownerModel = new OwnerModel()
const patientModel = new PatientModel()
const treatmentModel = new TreatmentModel()


// server.app.use('/auth', createAuthRouter({ authModel }));
server.app.use('/appointment', createAppointmentRouter({ appointmentModel }))
server.app.use('/billing', createBillingRouter({ billingModel }))
server.app.use('/owners', createOwnerRouter({ ownerModel }))
server.app.use('/patients', createPatientRouter({ patientModel }))
server.app.use('/treatments', createTreatmentRouter({ treatmentModel }))
server.dbConnection()
server.listen()
