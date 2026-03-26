import express from 'express'
import cors from 'cors'
import candidatosRouter from './routes/candidatos.routes.js'
import vagasRouter from './routes/vagas.routes.js'
import candidaturasRouter from './routes/candidaturas.routes.js'
import entrevistasRouter from './routes/entrevistas.routes.js'

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

app.use('/candidatos', candidatosRouter)
app.use('/vagas', vagasRouter)
app.use('/candidaturas', candidaturasRouter)
app.use('/entrevistas', entrevistasRouter)
// Alias to match requested endpoint name
app.use('/inscricoes', candidaturasRouter)

export default app
