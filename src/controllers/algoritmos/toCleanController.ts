import { Request, Response } from 'express'
import { toCleanService } from '../../services/algoritmos/toCleanService'

export class ToCleanController {
	handle(request: Request, response: Response) {
		const uncleanedList = request.body

		const ToCleanService = new toCleanService()

		const cleanedList = ToCleanService.execute(uncleanedList)

		return response.json(cleanedList)
	}
}