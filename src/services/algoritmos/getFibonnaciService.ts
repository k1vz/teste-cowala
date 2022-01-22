export class getFibonnaciService {
	execute(num: number): number[] {
		const result = []
		
		for (let i = 0; i <= num; i++) {
			if(i === 0 || i === 1) {
				result.push(i)
			} else {
				result.push(result[i - 1] + result[i - 2])
			}
		}

		return result
	}
}