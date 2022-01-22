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
	execute(list: IList[]): string[] {
		const lists = {
			myName: '',
			responsible: [],
			unresponsible: []
		}

		for (let person of list) {
			if (person.souEu) {
				lists.myName = person.nome
			}
			
			if (person.responsavel) lists.responsible.push(person.nome)

			if (!person.responsavel) lists.unresponsible.push(person.nome)
		}

		const classifiedList = [lists.myName].concat(sort(lists.responsible).concat(sort(lists.unresponsible)))

		return classifiedList
	}
}