interface IList {
	souEu: boolean,
	responsavel: boolean,
	nome: string
}

function sort(e: string[]): string[] {
	return e.sort(function(a, b) {
		const nameA = a.toUpperCase()
		const nameB = b.toUpperCase()

		if (nameA < nameB) return -1

		if (nameA > nameB) return 1

		return 0
	})
}

export class toClassifyService {
	execute(list: IList[]): Object[] {
		const responsibleList = []
		const unresponsibleList = []
		let myName = ''

		for (let i of list) {
			if (i.souEu) {
				myName = i.nome
			}
			
			if (i.responsavel) responsibleList.push(i.nome)

			if (!i.responsavel) unresponsibleList.push(i.nome)
		}

		const classifiedList = [myName].concat(sort(responsibleList).concat(sort(unresponsibleList)))

		return classifiedList
	}
}