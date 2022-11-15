### Exercício 1
a)
ALTER TABLE Actor DROP COLUMN salary;

A tabela e atualizada pelo comando ALTER e retira a coluna de salario com o comando DROP COLUMN.

b) 
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Altera o nome da tabela de "gender" pra "sex" e o requisito para 6 caract. max

c) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Mantem o nome da tabela como "gender" e altera o requisito para 255 carac. max

d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

### Exercício 2
a)UPDATE Actor
SET name = "Moacyr Franco",
 birth_date = "2020-02-10"
WHERE id = 003;

b)
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

c) 
UPDATE Actor
SET 
name = "Jade Picon",
salary = 2,
birth_date ="2001-09-24",
gender = "Female"
WHERE id = 005

d) 
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Nao houve mudancas, nao apreceu mensagem de erro, porem nao foram encontrados as rows ids que selecionamos e nao houve alteracao.

### Exercício 3
a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b)
DELETE FROM Actor WHERE gender =  "Male" AND salary > 100000000;

### Exercício 4
a)
SELECT MAX(salary) FROM Actor;
b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
d)
SELECT SUM(salary) FROM Actor

### Exercício 5
a) A query retorna a quatidade de atores agrupados em cada genero, ou seja, 2 Male e 4 Female.

b) SELECT id, name FROM Actor
WHERE gender = "Male" ORDER BY name DESC;

c) SELECT * FROM Actor
ORDER BY salary ASC

d)
SELECT * FROM Actor
ORDER BY SALARY DESC
LIMIT 3

e) SELECT gender, AVG(salary)
 FROM Actor
 GROUP BY gender

### Exercício 6
a)
ALTER TABLE Movies ADD playing_limit_date DATE;

b)
 ALTER TABLE Movies CHANGE evaluation rating DOUBLE NOT NUL

c) 
UPDATE Movies
SET playing_limit_date ="2022-11-11"
WHERE id = "001";

UPDATE Movies
SET playing_limit_date="2022-11-9"
WHERE id = "002";

d)
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

0 mudancas pois ele nao encontrou o id indicado.