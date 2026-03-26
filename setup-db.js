import mysql from 'mysql2/promise';
import fs from 'fs';

async function setupDatabase() {
  const connection = await mysql.createConnection({
    host: '137.131.194.225',
    user: 'remoto',
    password: '123456senha',
    database: 'aula4banco'
  });

  try {
    const sql = fs.readFileSync('setup.sql', 'utf-8');
    const statements = sql.split(';').filter(s => s.trim());
    
    for (const statement of statements) {
      if (statement.trim()) {
        console.log('Executando:', statement.substring(0, 50) + '...');
        await connection.query(statement);
      }
    }
    
    console.log('✅ Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await connection.end();
  }
}

setupDatabase();
