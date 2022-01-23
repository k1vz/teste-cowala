import { IId } from './IId'

export interface ICurrencyConversion extends IId {
	moedaOriginal: string,
	moedaDaConversao: string,
	valorEnviado: number,
	valorConvertido?: number
}

export interface ICurrencyConversions extends Array<ICurrencyConversion> {}

export interface ICurrencyAPI {
	string: {
		code: string,
		codein: string,
		name: string,
		high: string,
		low: string,
		varBid: string,
		pctChange: string,
		bid: string,
		ask: string,
		timestamp: string,
		create_date: Date
	}
}