# Challenge Frontend - React
Convert the following design to a Single Web Application (SPA):

![Logo](logo.jpeg)

![Screenshot 1](screenshots/screenshot1.png)

[Figma](https://www.figma.com/file/szAbOw9emV2pQE3WfWstcf/Shoppy-app-ui-(Community)?node-id=103%3A2)


## Technology stack
You are expected to use the following:
- Use [React](https://reactjs.org/)
- Library for state management (for example Redux);
- SCSS syntax for page styles using SASS or LESS;
- ECMAScript 6 for JavaScript.

## Context
You're entering a website with all of the characters and houses of the show Game of Thrones. The user should be able to do:
- List the characters
- List the houses
- Filter characters by house
- Filter characters by name
- Favorite the characters ("add to cart")
- **USE SHOULD ALWAYS THE SHOW'S API AND DO NOT USE THE BOOK's**


## Instructions
- Fork this project, work and make a pull request when you're done
- Consulting the [API](https://api.got.show/doc/) you must do the following tasks:
    - Below the search bar list all **"`HouseShow`"** [Screenshot](screenshots/screenshot2.png)
    - When the user clicks in one of the houses a filter should be done and the result should be listed
        - List in each tile the character name, its titles, its gender and if it's alive or not (We ❤️ custom icons and gifs)
    - When the user search a character name in the search bar, the expected result should be a filter with the input consulting the API by name
    - When the user clicks "Add" the chracter should be added to the cart (changing the cart number only) - Attention with the heart 


## Requirements
- The website must be compatible with: Firefox, Chrome, Edge browsers;
- Your application must be responsive (we did not create a mobile design version because we want to see your solution to this problem)
- Unit tests
- **Deploy your application on a free host service and add the public link on this file**

## How we review
The submitted code will be evaluated for the following aspects:

- **Design.** How is the design implemented, is there any differences in how we see it? Do you use mobile first design pattern?

- **Compatibility.** Does the design look more or less the same in all of the browsers? Is it responsive on all the screen sizes? Does the application look good on mobile?

- **Architecture.** How are the files structured? Does the file names match the contents of it?

- **Code Quality.** Does the code run without errors? Do you handle errors? How well HTML semantics are used? How is the CSS/Javascript implemented? Do you make separate commits for different features?


## Tips
- We ❤️ animations, code coverage and end-to-end tests

---

## Descrição

### Aplicação client do desafio tecnico lelabs, desenvolvida com React.

- Aplicação servida na Netlify - [Lelabs-front-challenge](https://lelabs-challenge.netlify.app/)
---

### A aplicação foi desenvolvida utilizando as Tecnologias e ferramentas:

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Zustand State management](https://github.com/pmndrs/zustand)
- [Testing library](https://testing-library.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Cypress](https://docs.cypress.io/)
---

Para rodar a aplicação em ambiente de desenvolvimento:

```shell
## instala as dependencias
npm i

## roda o projeto na porta 3000
npm start
```

Para rodar os testes unitários:

```shell
npm run test
```

Para rodar os testes end-to-end:

```shell
npm run test:e2e
```

Para rodar o Storybook:

```shell
npm run storybook
```