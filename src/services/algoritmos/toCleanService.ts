export class toCleanService {
	execute(list: object): object {
		for (let e in list) {
			if(!list[e]) delete(list[e])
		}

		return list
	}
}