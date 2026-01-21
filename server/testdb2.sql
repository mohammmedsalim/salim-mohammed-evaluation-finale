CREATE DATABASE IF NOT EXISTS testdb2;
USE testdb2;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (email, password) VALUES 
('test@example.com', '1234'),
('alice@gmail.com', 'alice123');

INSERT INTO tasks (title, user_id) VALUES 
('Tâche 1 pour Test', 1),
('Tâche 2 pour Test', 1),
('Acheter du lait', 2);
