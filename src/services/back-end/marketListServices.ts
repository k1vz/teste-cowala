import { IId } from '../../interfaces/IId'
import { IMarketItem, IMarketList } from '../../interfaces/IMarket'
import { marketList } from '../../repositories/marketRepository'

export class marketListServices {
	async createMarketList(item: IMarketItem): Promise<void> {
		marketList.push(item)
	}

	async readAllItems(): Promise<IMarketList> {

		return marketList
	}

	async readOnly({ id }: IId): Promise<IMarketItem> {
		const index = marketList.findIndex(item => item.id === id)
		const marketItem = marketList[index]

		return marketItem
	}

	async updateMarketList({ id, preco }: IMarketItem): Promise<IMarketList> {
		const index = marketList.findIndex(item => item.id === id)
		if(index > 0 || index === 0) {
			marketList[index].preco = preco
		}

		return marketList
	}

	async deleteItem({ id }: IId): Promise<void> {
		const index = marketList.findIndex(item => item.id === id)

		if(index > 0 || index === 0) {
			marketList.splice(index, 1)
		}
	}
}