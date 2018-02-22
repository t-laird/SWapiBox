![Logo of the project](./swapi-box.png?raw=true)

# SWapiBox
> Turing School Mod 3 Project

SWapiBox pulls in API data from the StarWars API displays information on a variety of StarWars universe related characters. SWapiBox is built with React/Router and ES7 async/await.

## Installing / Getting started

To get started.

```shell
git clone https://github.com/t-laird/SWapiBox.git
cd SWapiBox
npm install
npm run build-css
```

git clone will clone down the repo on to your local machine.

cd SWapiBox changes in to the SWapiBox directory.

npm install installs the project dependencies.

npm run build-css compiles the SCSS into CSS.

## Development

### Built With
  * react - boostrapped with create-react-app version: *16.2.0*
  * react-dom - version: *16.2.0*
  * react-router - version: *4.2.0*
  * react-router-dom - version: *4.2.2*

### Prerequisites
Node - [Download Here](https://nodejs.org/en/download/current/)

NPM - Node package manager - [Download Here](https://www.npmjs.com/get-npm)


### Setting up Dev

In order to work with the project, clone it down, cd into the directory and install the associated packages.

```shell
git clone https://github.com/t-laird/SWapiBox
cd SWapiBox
npm install
```

The required node_modules will then be installed in order to appropriately work on the project.

The dev server is started with `npm start` and will default to localhost:3000 if available, and the next incremental port otherwise (3001, 3002, etc.).


### Deploying / Publishing
This project can be built to a production react app and deployed to github pages.

```shell
npm run deploy
```

This script builds the project using `react-scripts build` and then deploys to github pages.

## Tests

Project can be tested and linted with the attached linter config.

```shell
npm test
npm run eslint
```

## Api Reference

This project uses the SWAPI api found [here](https://swapi.co/).
