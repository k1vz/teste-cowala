import { Router } from 'express'
import { GetFibonnaciController } from './src/algoritmos/controllers/getFibonnaciController'
import { ToClassifyController } from './src/algoritmos/controllers/toClassifyController'
import { ToCleanController } from './src/algoritmos/controllers/toCleanController'
import { CheckValityController } from './src/algoritmos/controllers/checkValityController'

export const router = Router()

const getFibonnaciController = new GetFibonnaciController()
const toClassifyController = new ToClassifyController()
const toCleanController = new ToCleanController()
const checkValityController = new CheckValityController()

router.post('/algoritmos/fibonnaci', getFibonnaciController.handle)
router.post('/algoritmos/classificador', toClassifyController.handle)
router.post('/algoritmos/faxina', toCleanController.handle)
router.post('/algoritmos/validade', checkValityController.handle)