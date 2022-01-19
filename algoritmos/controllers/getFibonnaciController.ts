import { Request, Response } from 'express'
import { getFibonnaciService } from '../services/getFibonnaciService'

interface IProps {
	num: number
}

export class GetFibonnaciController {
	handle(request: Request, response: Response) {
		const { num }: IProps = request.body

		const GetFibonnaciService = new getFibonnaciService()

		const fibonnaci = GetFibonnaciService.handle(num)

		return response.json(fibonnaci)
	}
}