export function sort(e: string[]): string[] {
	
	return e.sort(function(a, b) {
		const nameA = a.toUpperCase()
		const nameB = b.toUpperCase()

		if(nameA < nameB) return -1

		if(nameA > nameB) return 1

		return 0
	})
}