import { IPersonList } from '../../interfaces/IPersonList'
import { sort } from '../../utils/sortPeopleAlphabetically'

export class toClassifyService {
	execute(list: IPersonList[]): string[] {
		const lists = {
			myName: '',
			responsible: [],
			unresponsible: []
		}

		for (let person of list) {
			if(person.souEu) {
				lists.myName = person.nome

				continue
			}
			
			if(person.responsavel) lists.responsible.push(person.nome)

			if(!person.responsavel) lists.unresponsible.push(person.nome)
		}

		const classifiedList = [lists.myName].concat(sort(lists.responsible).concat(sort(lists.unresponsible)))

		return classifiedList
	}
}