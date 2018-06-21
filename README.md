# Finders-Keepers Frontend Documentaion

### Contents
* [Build Status](#Build-Status)

* [Getting Started](#getting-started)
* [Authors & Credits](#Authors)
* [Test Coverage](#Tests)
* [Architecture](#Architecture)

## Version

1.0.2

## Description

Finder's Keepers is a competitive, multi-player, brain-game inspired by iSpy. Users have 30 seconds to find and click as many stars as they can,before their competitors. The user who is able to find the most items in their round is declared the winner!

## Build Status

UPDATE THIS UPDATE THIS UPDATE THIS
[![Build Status](https://travis-ci.org/spyosaurus/finders-keepers-frontend.svg?branch=master)](https://travis-ci.org/spyosaurus/finders-keepers-frontend)

## Architecture
Finder's Keepers is a full-stack application, utilizing the following:

- Code Style: Airbnb
- Test Suite: Jest
- Transpiling: Babel
- Ajax Requests: Superagent
- Continuous Integration: Travis CI
- Misc: Eslint, dotenv

## Frontend
- View Library: React
- State Management: Redux
- Bundler: Webpack
- Style: Sass
### Misc 
- Css-loader,
- Enzyme, Prop-Types,
- mini-css-extra-plugin, html-webpack-plugin

## Backend
- Framework: Express
- Database: MongoDB
- Logging: Winston
- CORS: cors

## ENV Files
- In your forntend .env file, enter the following:
```
NODE_ENV=development
API_URL=http://localhost:3000
```

- In your backend .env file, enter the following:
```

NODE_ENV=development
PORT=3000
DEBUG=true
CORS_ORIGIN=http://localhost:8080

MONGODB_URI=mongodb://localhost/testing

FINDERS_SECRET=yoursecretcodegoeshere
```
## Getting Started:
1. Fork both FRONTEND AND BACKEND repositories from GitHub.
2. Clone the repo to your local machine.
3. Run the ```npm i``` command in the frontend and backend to install all required dependencies.
4. IN THE BACKEND, Run the ```node index.js``` command in your terminal.
5. IN THE BACKEND, Run the ```npm run test``` command in your terminal.
6. IN THE FRONTEND run the ```npm run test``` command to run testing on frontend.
7. IN THE FRONTEND run the ```npm run watch``` command to render application to the browser. 

## socket.IO







## Tests
- Test Suite: Jest
- npm run test
- Backend Coverage:
- Frontend Coverage:

## Authors

Cara Ottmar, Collin Meredith, Jennifer Piper and Wyatt Pefley

## Credits 
- Heith Smith

License: MIT