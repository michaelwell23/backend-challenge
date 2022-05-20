# Backend Test Shaw and Partners

A proposta do teste era criar uma aplicação para consumir a API do GitHUB, mais precisamente os endpoints de usuários e repositórios. 

## ROTAS
* GET -https://backend-challenge-api-node.herokuapp.com/api/users?since=1
Esse endpoint retorna uma lista de usuários do GitHub e o link para a próxima página. Para alterar as páginas de usuários é preciso alterar os numeros. Os usuários são organizados em páginas de 1 a 6, contendo 5 usuários em cada página.

* GET - https://backend-challenge-api-node.herokuapp.com/api/users/{username}/details
Este endpoint deve retornar os detalhes de um usuário do GitHub

* GET - https://backend-challenge-api-node.herokuapp.com/api/users/{username}/repos
Este endpoint deve retornar uma lista com todos os repositórios de usuários