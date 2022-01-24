import { Router } from 'express'
import { GetFibonnaciController } from './controllers/algoritmos/getFibonnaciController'
import { ToClassifyController } from './controllers/algoritmos/toClassifyController'
import { ToCleanController } from './controllers/algoritmos/toCleanController'
import { CheckValityController } from './controllers/algoritmos/checkValityController'
import { MarketListControllers } from './controllers/back-end/marketListControllers'
import { CurrencyConversionControllers } from './controllers/back-end/currencyConversionControllers'
import { CreateFrameController } from './controllers/algoritmos/createFrameService'

export const router = Router()

/* Algoritmos */

const getFibonnaciController = new GetFibonnaciController()
const toClassifyController = new ToClassifyController()
const toCleanController = new ToCleanController()
const checkValityController = new CheckValityController()
const createFrameController = new CreateFrameController()

router.post('/algoritmos/fibonnaci', getFibonnaciController.handle)
router.post('/algoritmos/classificador', toClassifyController.handle)
router.post('/algoritmos/faxina', toCleanController.handle)
router.post('/algoritmos/validade', checkValityController.handle)
router.post('/algoritmos/moldura', createFrameController.handle)

/* Back-End */

// Mercado

const marketListControllers = new MarketListControllers()

router.post('/back-end/mercado/create', marketListControllers.createMarketList)
router.get('/back-end/mercado/readAll', marketListControllers.readAllItems)
router.post('/back-end/mercado/readOnly', marketListControllers.readOnly)
router.post('/back-end/mercado/update', marketListControllers.updateMarketList)
router.post('/back-end/mercado/delete', marketListControllers.deleteItem)

// Conversão de Moedas

const currencyConversionControllers = new CurrencyConversionControllers()

router.post('/back-end/conversao/create', currencyConversionControllers.createCurrencyConversion)
router.get('/back-end/conversao/readAll', currencyConversionControllers.readAllConversions)
router.post('/back-end/conversao/readOnly', currencyConversionControllers.readOnly)
router.post('/back-end/conversao/delete', currencyConversionControllers.deleteConversion)