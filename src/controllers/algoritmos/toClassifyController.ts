import { Request, Response } from 'express'
import { toClassifyService } from '../../services/algoritmos/toClassifyService'

export class ToClassifyController {
	handle(request: Request, response: Response) {
		const unclassifiedList = request.body

		const ToClassifyService = new toClassifyService()

		const classifiedList = ToClassifyService.execute(unclassifiedList)

		return response.json(classifiedList)
	}
}