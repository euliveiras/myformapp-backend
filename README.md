# myformapp-backend

- [resumo](#resumo)
- [instalação](#instalação)
- [tecnologias utilizadas](#tecnologias-utilizadas)

## resumo

myformapp-backend é uma API que recebe requisições da rota **/signup** com user, email e password no corpo da requisição e grava em um banco de dados **Postgres**.

## instalação

1. Para instalar as dependências:
> yarn
2. Após instalada as dependências, para podermos visualizar as informações armazenadas no banco de dados, teremos que instalar alguma ferramenta como o [dbeaver](https://dbeaver.io/).
3. Instalamos também alguma ferramenta similar ao [insomnia](https://insomnia.rest/download) para fazermos requisições à nossa API.
4. Para iniciarmos a API, na raiz do projeto, usamos o script:
> yarn dev
5. Nossa requisição deve ter em seu corpo os campos **user, email e password**:
> ``
{
    "user": "John Doe", 
    "email": "johndoe@etc.com", 
    "password": "123123"
}``
6. Para testarmos a aplicação podemos utilizar o script "test", que utiliza a ferramenta de testes Jest
> ``yarn test src/modules/users/services/CreateUserService.spec.ts``

## tecnologias utilizadas

- nodeJs
- typescript
- expressJs
- jest
- ts-node-dev
- typeorm
- postgre


