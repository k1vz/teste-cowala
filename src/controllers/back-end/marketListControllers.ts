import { Request, Response } from 'express'
import { IMarketItem } from '../../interfaces/IMarket'
import { marketListServices } from '../../services/back-end/marketListServices'

export class MarketListControllers {
	async createMarketList(request: Request, response: Response) {
		const marketItem: IMarketItem = request.body

		const MarketListService = new marketListServices()

		await MarketListService.createMarketList(marketItem)

		return response.json(`Status 200: Done!`)
	}

	async readAllItems(request: Request, response: Response) {
		const MarketListService = new marketListServices()

		const marketList = await MarketListService.readAllItems()

		return response.json(marketList)
	}

	async readOnly(request: Request, response: Response) {
		const { id }: IMarketItem = request.body

		const MarketListService = new marketListServices()

		const marketItem = await MarketListService.readOnly({ id: id })

		return response.json(marketItem)
	}

	async updateMarketList(request: Request, response: Response) {
		const { id, preco }: IMarketItem = request.body

		const MarketListService = new marketListServices()

		await MarketListService.updateMarketList({ id: id, preco: preco })

		return response.json(`Status 200: Done!`)
	}

	async deleteItem(request: Request, response: Response) {
		const { id }: IMarketItem = request.body

		const MarketListService = new marketListServices()

		await MarketListService.deleteItem({ id: id })

		return response.json(`Status 200: Done!`)
	}
}