import { Router } from 'express'
import { GetFibonnaciController } from './controllers/algoritmos/getFibonnaciController'
import { ToClassifyController } from './controllers/algoritmos/toClassifyController'
import { ToCleanController } from './controllers/algoritmos/toCleanController'
import { CheckValityController } from './controllers/algoritmos/checkValityController'
import { MarketListControllers } from './controllers/back-end/marketListControllers'

export const router = Router()

const getFibonnaciController = new GetFibonnaciController()
const toClassifyController = new ToClassifyController()
const toCleanController = new ToCleanController()
const checkValityController = new CheckValityController()

const marketListControllers = new MarketListControllers()

router.post('/algoritmos/fibonnaci', getFibonnaciController.handle)
router.post('/algoritmos/classificador', toClassifyController.handle)
router.post('/algoritmos/faxina', toCleanController.handle)
router.post('/algoritmos/validade', checkValityController.handle)

router.post('/back-end/mercado/create', marketListControllers.createMarketList)
router.get('/back-end/mercado/readAllItems', marketListControllers.readAllItems)
router.post('/back-end/mercado/readOnly', marketListControllers.readOnly)
router.post('/back-end/mercado/update', marketListControllers.updateMarketList)
router.post('/back-end/mercado/delete', marketListControllers.deleteItem)