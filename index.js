import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'

const PORT = process.env.PORT || 3001

// start server and log detailed listen info
const server = app.listen(PORT, ()=>{
  const addr = server.address()
  const host = addr && addr.address ? addr.address : '0.0.0.0'
  const port = addr && addr.port ? addr.port : PORT
  console.log(`Recrutamento API rodando em http://${host}:${port} (pid=${process.pid})`)
})

// handle unexpected errors
server.on('error', (err)=>{
  console.error('Server error', err)
  process.exit(1)
})
