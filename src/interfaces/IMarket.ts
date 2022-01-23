import { IId } from './IId'

export interface IMarketItem extends IId {
	item?: string,
	preco: number
}

export interface IMarketList extends Array<IMarketItem> {}