# Desafio React

Desafio técnico para vaga Desenvolvedor Javascript + React + React Native

## Objetivo

Construir a interface de um ecommerce de games utilizando ReactJS.

### Requisitos

  - Os produtos devem ser renderizados dinamicamente através dos assets fornecidos.
  
  - Os valores exibidos no checkout (frete, subtotal e total) devem ser calculados dinamicamente.
  
  - O usuário poderá adicionar e remover produtos do carrinho.
  
  - O usuário poderá ordenar os produtos por preço, popularidade (score) e ordem alfabética.
  
  - A cada produto adicionado, deve-se somar R$ 10,00 ao frete.
  
  - O frete é grátis para compras acima de R$ 250,00.

## Projeto Desenvolvido

Tecnologias utilizadas, informações adicionais e guia de instalação e execução.

### Tecnologias Utilizadas

- Front-End (React)
  - Bootstrap
  - Redux
  - React Router
  - React Hook Form
  - ESLint
  - entre outras

- Ambiente de Desenvolvimento
  - Linux
  - Visual Studio Code
  - Docker

### Informações Adicionais

Como o projeto não faz uso de banco de dados todas os dados da interação do usuário são armazenados utilizando *local storage*. Também possível acessar a aplicação pelo [GitHub Pages](https://guilhermercarvalho.github.io/technical-test-js-react-reactNative/#/).


### Instalação e Execução

É possível executar a aplicação em ambientes com NodeJS, Yarn ou NPM instalados

- Iniciando o Servidor Front-End

Em outro terminal instale as dependências necessárias para execução do front-end e inicie o servidor front-end.

Acessar diretório `app` e instalar as dependências:

```shell
cd app

yarn install

# ou então
npm install
```

Iniciar servidor front-end:

```shell
yarn start

# ou então
npm run start
```
