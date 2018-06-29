# Spring Boot - Websockets - React chat application


In order to start the application you need to first build and start the backend, then it is required to start the frontend


## Building and starting the backend

Go in the project root folder and run the following:

mvn clean spring-boot:run

This will start a backend listening on port 8080 so make sure port 8080 is available


## Starting the frontend

Next go in the project subfolder frontend and run the following:

yarn install
yarn start


or

npm install
npm start

This will start a frontend server on port 3000 so please make sure port 3000 is also available. Once the server starts it should open a browser session on http://localhost:3000. The server will also proxy requests to the backend so it should be possible to run the application without using any CORS workarounds.