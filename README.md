# optus-web-chatbot

## Sobre o Projeto
Aplicação desenvolvida para disponibilizar uma API com funcionalidades de criar, ler, modificar e deletar informações relativas a entregas de pacotes e encomendas realizadas por drones, incluindo upload e download de vídeos.

## Tecnologias e Ferramentas empregadas
Java 11;
Spring Boot;
JUnit 5;
Maven;
MySQL; e
Docker.

## Status do Projeto
Aplicação em funcionamento, incluindo os testes unitários.

## Acesso à Aplicação
### Antes da instalação
Fazer o Clone do repositório.

### Instalação e Execução
A. Entrar no diretório raiz da aplicação:

  $ cd Api-drone-feeder

B. Instalar a aplicação pelo Docker Compose, através do comando:
  
  $ docker-compose up -d

C. Serão iniciados os dois containers:
  1. container docker db, com o banco de dados em MySQL; e
  2. container docker spring-boot-app, com a aplicação em Java 11 (Spring Boot).

D. Acessar as rotas abaixo (em http://localhost:8080):

## Contribuintes
|Nome|GitHub|
| -------- | -------- |
|Moisés Fernandes|https://github.com/moisesfdasilva|

## Contato
[GitHub: optus-web-chatbot](https://github.com/moisesfdasilva/optus-web-chatbot)
