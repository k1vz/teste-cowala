import { Router } from 'express'
import { GetFibonnaciController } from './algoritmos/controllers/getFibonnaciController'

export const router = Router()

const getFibonnaciController = new GetFibonnaciController()

router.get('/algoritmos/fibonnaci', getFibonnaciController.handle)