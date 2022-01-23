export interface ICurrencyConversion {
	id: number,
	moedaOriginal: string,
	moedaDaConversao: string,
	valorEnviado: number,
	valorConvertido: number
}

export interface ICurrencyConversions extends Array<ICurrencyConversion> {}