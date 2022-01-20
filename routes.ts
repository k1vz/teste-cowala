import { Router } from 'express'
import { GetFibonnaciController } from './src/algoritmos/controllers/getFibonnaciController'
import { ToClassifyController } from './src/algoritmos/controllers/toClassifyController'
import { ToCleanController } from './src/algoritmos/controllers/toCleanController'

export const router = Router()

const getFibonnaciController = new GetFibonnaciController()
const toClassifyController = new ToClassifyController()
const toCleanController = new ToCleanController()

router.get('/algoritmos/fibonnaci', getFibonnaciController.handle)
router.post('/algoritmos/classificador', toClassifyController.handle)
router.post('/algoritmos/faxina', toCleanController.handle)