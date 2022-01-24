import { IFrame, IData } from '../../interfaces/IFrame'

export class createFrameService {
	execute({ height, width }: IFrame) {
		function forAll ({ number, string }: IData): string {
			var data = ''
			for(var i = 0; i < number; i++) {
				data += string
			}
			
			return data
		}
	
		var widthTraces = '\n +'
		var heigthTraces = ''

		for(var i = 0; i < width; i++) {
			widthTraces += '-'

			if(i == width - 1) {
				widthTraces += '+'
			}
		}

		for(var i = 0; i != height; i++) {
			heigthTraces += '\n -' + forAll({ number: width, string: ' ' }) + '-'
		  }
		  console.log( widthTraces+heigthTraces+ widthTraces)
	}
}