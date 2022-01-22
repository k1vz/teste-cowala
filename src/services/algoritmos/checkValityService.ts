interface IProductVality {
	date: Date,
	vality: string
}

function addDays(date: Date, days: number) {
	date = new Date(date)
	date.setDate(date.getDate() + days)

	return date
  }

export class checkValityService {
	execute(productVality: IProductVality): boolean {
		const currentDate = new Date
		
		productVality.date = addDays(productVality.date, parseInt(productVality.vality))

		if (productVality.date.getTime() > currentDate.getTime()) return true

		return false
	}
}