export function addDays(date: Date, days: number) {
	date = new Date(date)
	date.setDate(date.getDate() + days)

	return date
}