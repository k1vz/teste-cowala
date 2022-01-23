export interface IMarketItem {
	id: number,
	item?: string,
	preco?: number
}

export interface IMarketList extends Array<IMarketItem> {}