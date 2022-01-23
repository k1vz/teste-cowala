import express, { Request, Response } from 'express'
import { router } from './routes'

const app = express()
const port = 4000

app.use(express.json())
app.use(router)
app.use((err: Error, request: Request, response: Response) => {
	if(err instanceof Error) {
		return response.status(400).json({
			error: err.message
		})
	}

	return response.status(400).json({
		status: "error",
		message: "Internal Server Error"
	})
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})