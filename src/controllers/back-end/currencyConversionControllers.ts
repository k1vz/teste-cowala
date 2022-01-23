import { Request, Response } from 'express'
import { ICurrencyConversion } from '../../interfaces/ICurrencyConversion'
import { currencyConversionServices } from '../../services/back-end/currencyConversionServices'

export class CurrencyConversionControllers {
	async createCurrencyConversion(request: Request, response: Response) {
		const currencyConversion: ICurrencyConversion = request.body

		const CurrencyConversionServices = new currencyConversionServices()

		await CurrencyConversionServices.createCurrencyConversion(currencyConversion)

		return response.json(`Status 200: Done!`)
	}

	async readAllConversions(request: Request, response: Response) {
		const CurrencyConversionServices = new currencyConversionServices()

		const currencyConversion = await CurrencyConversionServices.readAllConversions()

		return response.json(currencyConversion)
	}

	async readOnly(request: Request, response: Response) {
		const { id }: ICurrencyConversion = request.body

		const CurrencyConversionServices = new currencyConversionServices()

		const currencyConversion = await CurrencyConversionServices.readOnly({ id: id })

		return response.json(currencyConversion)
	}

	async deleteConversion(request: Request, response: Response) {
		const { id }: ICurrencyConversion = request.body

		const CurrencyConversionServices = new currencyConversionServices()

		await CurrencyConversionServices.deleteConversion({ id: id })

		return response.json(`Status 200: Done!`)
	}
}