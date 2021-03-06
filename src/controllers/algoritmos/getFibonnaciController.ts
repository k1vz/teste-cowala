import { Request, Response } from 'express'
import { getFibonnaciService } from '../../services/algoritmos/getFibonnaciService'

interface IProps {
	num: number
}

export class GetFibonnaciController {
	handle(request: Request, response: Response) {
		const { num }: IProps = request.body

		const GetFibonnaciService = new getFibonnaciService()

		const fibonnaci = GetFibonnaciService.execute(num)

		return response.json(fibonnaci)
	}
}