-- Schema para recrutamento no banco aula4banco

CREATE TABLE IF NOT EXISTS candidatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(50),
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vagas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  local VARCHAR(255),
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS candidaturas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  candidato_id INT NOT NULL,
  vaga_id INT NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidato_id) REFERENCES candidatos(id) ON DELETE CASCADE,
  FOREIGN KEY (vaga_id) REFERENCES vagas(id) ON DELETE CASCADE
);

ALTER TABLE candidaturas ADD UNIQUE INDEX uq_candidato_vaga (candidato_id, vaga_id);

CREATE TABLE IF NOT EXISTS entrevistas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  candidato_id INT NOT NULL,
  vaga_id INT NOT NULL,
  agendada_em DATETIME NOT NULL,
  local VARCHAR(255),
  observacao TEXT,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidato_id) REFERENCES candidatos(id) ON DELETE CASCADE,
  FOREIGN KEY (vaga_id) REFERENCES vagas(id) ON DELETE CASCADE
);

-- dados de exemplo
INSERT INTO candidatos (nome,email,telefone) VALUES ('Ana Silva','ana@example.com','1199999');
INSERT INTO vagas (titulo,descricao,local) VALUES ('Desenvolvedor Node','Vaga para backend com Node/Express','Remoto');
