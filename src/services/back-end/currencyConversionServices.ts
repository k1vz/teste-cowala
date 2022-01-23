import { ICurrencyConversion, ICurrencyConversions } from '../../interfaces/ICurrencyConversion'
import { IId } from '../../interfaces/IId'
import { currencyConversions } from '../../repositories/currencyRepository'

export class currencyConversionServices {
	async createCurrencyConversion(conversion: ICurrencyConversion): Promise<void> {
		currencyConversions.push(conversion)
	}

	async readAllConversions(): Promise<ICurrencyConversions> {

		return currencyConversions
	}

	async readOnly({ id }: IId): Promise<ICurrencyConversion> {
		const index = currencyConversions.findIndex(conversion => conversion.id === id)
		const marketConversion = currencyConversions[index]

		return marketConversion
	}

	async deleteConversion({ id }: IId): Promise<void> {
		const index = currencyConversions.findIndex(conversion => conversion.id === id)

		if(index > 0 || index === 0) {
			currencyConversions.splice(index, 1)
		}
	}
}