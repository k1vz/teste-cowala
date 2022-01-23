import { ICurrencyConversion, ICurrencyConversions } from '../../interfaces/ICurrencyConversion'
import { IId } from '../../interfaces/IId'
import { currencyConversions } from '../../repositories/currencyRepository'
import { callCurrencyAPI } from '../../utils/callCurrencyAPI'

export class currencyConversionServices {
	async createCurrencyConversion(conversion: ICurrencyConversion): Promise<ICurrencyConversion> {
		const code = `${conversion.moedaDaConversao}-${conversion.moedaOriginal}`
		const codeResponse = `${conversion.moedaDaConversao}${conversion.moedaOriginal}`
		const currency = await callCurrencyAPI(code)
		
		conversion.valorConvertido = conversion.valorEnviado * ((parseFloat(currency[codeResponse].high) + parseFloat(currency[codeResponse].low)) / 2)
		console.log(conversion)
		
		currencyConversions.push(conversion)

		return conversion
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