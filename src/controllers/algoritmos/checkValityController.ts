import { Request, Response } from 'express'
import { checkValityService } from '../services/checkValityService'

export class CheckValityController {
	handle(request: Request, response: Response) {
		const productVality = request.body

		const CheckValityService = new checkValityService()

		const isValid = CheckValityService.execute(productVality)

		return response.json(isValid)
	}
}