# Backend Test Shaw and Partners

A proposta do teste era criar uma aplicação para consumir a API do GitHUB, mais precisamente os endpoints de usuários e repositórios. 

## ROTAS
* GET - /api/users?since={number}
Esse endpoint retorna uma lista de usuários do GitHub e o link para a próxima página. Como se trata da parte do backend, a paginação foi feita, mas o link para troca de página precisam ser trocados por meio da auteração dos numeros direto na rota. 

* GET - /api/users/:username/details
Este endpoint deve retornar os detalhes de um usuário do GitHub

* GET - /api/users/:username/repos
Este endpoint deve retornar uma lista com todos os repositórios de usuários