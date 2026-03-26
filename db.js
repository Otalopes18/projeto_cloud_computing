import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST || '137.131.194.225',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER || 'remoto',
  password: process.env.DB_PASS || '123456senha',
  database: process.env.DB_NAME || 'aula4banco',
  waitForConnections: true,
  connectionLimit: 10,
})

export default pool


