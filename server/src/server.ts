import express, { request } from 'express';
import routes from './routes';
import cors from 'cors';


/* Tudo vai partir desse app as rotas, requisições e etc. */
const app = express();

// Aqui nós ta falando para o app introduzar um pacote express.json para ler o .JSON
app.use(cors());
app.use(express.json());
app.use(routes);


// Alguns metodos:
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente
// Usar insomnia para ver o que tem no recurso POST, PUT, DELETE.

// Quando a gente que cria um usuário ou atualizar uma informação
// Vai vim no corpo da (Tipo de parametro: Request Body): Dados para criação ou atualização de registro
// Route Params: Identifcar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação


/* app.delete('/users/:id', (request, response) => {
  console.log(request.params)

  const users = [
    {name: 'Eder', age: 15},
    {name: 'Gabriel', age: 31},
  ]
  return response.json(users);
}); 
PARAMETRO ROUTE PARAMS */


/* app.get('/users', (request, response) => {
  console.log(request.query);

  
  const users = [
    {name: 'Eder', age: 15},
    {name: 'Gabriel', age: 31},
  ]
  return response.json(users);
})
PARAMETRO QUERY PARAMS */


 /* primeiro parametro /users quando o usuário acessar o /users eu execute alguma coisa */

 /* Dentro de uma arrayfunction */

 /* Primeiro parametro request. informações sobre a requisições */

 /* Segundo parametro response. E a resposta que vou ter da API para dentro do front-ed */

 // Cade endereço nós chama de rota
// localhost:3333/users
// localhost:3333/contacts
// recursos se referer a os /users, /contacts tudo que vem dps do endereço principal

/* app.get('/', (request,response ) => {
  // Tem como nós acessar o request.body

  /* Dar para coloca uma array com informações de usuários dentro do response.json([
     {name: 'Eder', age: 15},
    {name: 'Gabriel', age: 31},
  ]);
  Vai dar mesma coisa do quer usar uma variavel const */
 /*  return response.json({message: 'Hello World'});
}); */
 

/* Metodo Listen ele faz a aplicação ouvir um endereço HTTP ouvir requisições HTTP  */
// localhost:3333/users
app.listen(3333);