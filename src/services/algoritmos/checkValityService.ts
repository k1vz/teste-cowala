import { IProductVality } from '../../interfaces/IProductVality'
import { addDays } from '../../utils/addDaysToDate'

export class checkValityService {
	execute(productVality: IProductVality): boolean {
		const currentDate = new Date
		
		productVality.date = addDays(productVality.date, parseInt(productVality.vality))

		if (productVality.date.getTime() > currentDate.getTime()) return true

		return false
	}
}