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

# test on kubernetes cluster

create a gcp kubernetes container cluster with a free trial account

add the local docker image to container registry

configure docker to use gcloud command line tool to use credential helper

`gcloud auth configure-docker`

docker tag image to google registry url

`docker tag webpack4-react-docker eu.gcr.io/[PROJECT-ID]/webpack4-react:latest`

`docker push eu.gcr.io/[PROJECT-ID]/webpack4-react:latest`

deploy this container as a workload in the newly created cluster

expose the workload as a service with port 8000 mapped as a nodeport service
`kubectl create -f ./deploy/service.yaml`

expose the service as ingress HTTP load balancer
`kubectl create -f ./deploy/ingress.yaml`

once the ingress services is setup with public ip, you can run load, cdn, cache tests..
