import { Request, Response } from 'express'
import { IFrame } from '../../interfaces/IFrame'
import { createFrameService } from '../../services/algoritmos/createFrameService'

export class CreateFrameController {
	handle(request: Request, response: Response) {
		const userInput: IFrame = request.body

		const CreateFrameService = new createFrameService()

		const frame = CreateFrameService.execute(userInput)

		return response.json(frame)
	}
}