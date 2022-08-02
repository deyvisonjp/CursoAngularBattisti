# Angular - Matheus Battisti - Hora de Codar

## Hello World

- Instalar o CLI do Angular
  - `npm install -g @angular/cli`
- Criando o primeiro projeto
  - `ng new nome_do_projeto`
- Development server: `ng server`
- Build Run: `ng build`
- Para realizar o download de todas as dependências desse projeto: `npm install`

## Criando Componentes - Aula 04
- Para criar um componente podemos utilizar o CLI
    - `ng generate <nome>` ... no nosso caso: `ng generate component components/first-component`
    - Todos os arquivos necessários serão criados no projeto; 
    - Para importar o componente basta utilizar o seu _seletor_ em um HTML de outro componente;

## [Interpolação de dados](https://youtu.be/ZxnuGvoXd5Y?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw)
- Ex:
```
  name: string = 'Deyvison'
  age: number = 30;
  job = 'Programador';
  
  // Dentro do HTML
  <h3> Name: {{ name }} </h3>
  <p>Age: {{ age }} </p>
  <p>Job: {{ job }}</p>
```
