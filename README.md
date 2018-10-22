# webpack4-react-docker

Webpack4 react project with hot reloading in a docker container..

Sample repo demonstrates webpack4 hot-reloading functionality when the code is served from docker container instance. 

This allows developers to edit and debug code running in a live container on their machine. 

This way developers can replicate a production like container environment, isolated from their local machine context.

# run

For prod run together with http serve
`docker-compose up prod`

For dev run with webpack dev server
`docker-compose up watch`


# browse

The website will be served from host - container mapped port 8000

http://localhost:8000

# modify

change app.js file or index.html file, locally you should see changes refreshed on the browser page immediately.
