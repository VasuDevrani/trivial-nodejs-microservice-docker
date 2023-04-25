# Trivial Microservices on docker containers

<img src="https://user-images.githubusercontent.com/101383635/234161720-d72398bb-b266-4aa9-a7f5-0384cf19f282.png" width="400"/>

## Containers 
- Web - nodejs app serving webpage, used to interact with *products and users API*
- Users - nodejs server connected to mongo db
- Products - nodejs server connected to mysql db
- Mysql db
- Mongo db
- Nginx - load balancer 

## Network interfaces
- network01 - Users + Mongo db containers
- network02 - Products + MySql db containers

## Actions
- Create and read operations on Users and products using their Rest APIs
- Web serves client page at '/' for basic demonstration
- intermicroservice communication not included for simplicity 
