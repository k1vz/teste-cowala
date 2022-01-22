import { Router } from 'express'
import { GetFibonnaciController } from './controllers/algoritmos/getFibonnaciController'
import { ToClassifyController } from './controllers/algoritmos/toClassifyController'
import { ToCleanController } from './controllers/algoritmos/toCleanController'
import { CheckValityController } from './controllers/algoritmos/checkValityController'

export const router = Router()

const getFibonnaciController = new GetFibonnaciController()
const toClassifyController = new ToClassifyController()
const toCleanController = new ToCleanController()
const checkValityController = new CheckValityController()

router.post('/algoritmos/fibonnaci', getFibonnaciController.handle)
router.post('/algoritmos/classificador', toClassifyController.handle)
router.post('/algoritmos/faxina', toCleanController.handle)
router.post('/algoritmos/validade', checkValityController.handle)