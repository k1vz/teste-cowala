import axios from 'axios'
import { ICurrencyAPI } from '../interfaces/ICurrencyConversion'

export async function callCurrencyAPI(code: string): Promise<ICurrencyAPI> {
	try {
		const response = await axios.get(`https://economia.awesomeapi.com.br/last/${code}`)

		const data = response.data

		return data
	} catch(err) {
		throw new Error(err)
	}
}