import { Router } from 'express'
import { GetFibonnaciController } from './src/algoritmos/controllers/getFibonnaciController'
import { ToClassifyController } from './src/algoritmos/controllers/toClassifyController'

export const router = Router()

const getFibonnaciController = new GetFibonnaciController()
const toClassifyController = new ToClassifyController()

router.get('/algoritmos/fibonnaci', getFibonnaciController.handle)
router.post('/algoritmos/classificador', toClassifyController.handle)