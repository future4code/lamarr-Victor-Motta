### Ex Relacao SQL
### 1
a) Uma chave que cria relacao entre tabelas.
b) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"001",
"TOP!",
10,
"002"
);
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails

Deu erro pois ele nao encontra o filho da chave estrangeira.

d)ALTER TABLE Movies DROP COLUMN rating;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 

Deu erro pois nao e possivel apagar ou atualizar uma coluna parente com foreign key

### 2
a) Foi criado uma tabela com 2 colunas, e associamos essa tabela com a tabela Movies e Actot uma Foreign Key.
b)INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"004",
"004"
);
INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"002",
"002"
);
INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"003",
"005"
);
INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"003",
"006"
);
INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"002",
"006"
);
INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"003",
"006"
)
c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
O id naop existe em nenhuma das tabelas para relacao

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 

Nao pode apagar ou alterar uma coluna que apresenta relacao com uma chave estrangeira.

### 3
a) O comando seleciona todas as informacoes atraves do asterisco da tabela Movies, o comando INNER JOIN  seleciona registros que apresentam relacao em ambas tabelas,usamos o ON para relacionar a informacao Rating e Movies.id contidas em uma tabela em comum, a Movies. 

b)SELECT m.title as title, m.id as movies_id, r.rate as rating  FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;