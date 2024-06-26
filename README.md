TODO PRIORITY LOW:
* Fix footer for mobile screens
* Fix tags for mobile screens
* Check missing articles - for instance from Kosovo
* Books - remove 'Ted' tag
* Search - add enter handling
* Search - add validation
* List - add category
* Article - add category
* Errors - handle 404 and other errors
* Application version from pom.xml
* Add security communication

Implement JQuery:
* npm install @types/jquery --save-dev
* npm install jquery --save


USAGE LOCAL DEV
---------------

Command BE:
* mvn spring-boot:run -D"spring-boot.run.profiles"="dev"

Command FE:
* ng serve


USAGE LOCAL PROD (HEROKU)
--------------------------

Steps:
* Update BE file "application-dev.properties":
  * fe.url=http://localhost:3000
* Update FE file "environment.ts"
  * beUrl: 'http://localhost:8080'
* Run BE with: `mvn spring-boot:run -D"spring-boot.run.profiles"="dev"`
* Build FE with: `npm run heroku-postbuild`
* Run FE with: `npm run start`
* Open application with `http://localhost:3000`


USAGE DOCKER
------------

> Please be aware that following tools should be installed on your local PC: **Docker**. Docker tool has to be **up and running**. 

> Please **clone/download** project, open **project's main folder** in your favorite **command line tool** and then **proceed with steps below**. 

Usage steps:
1. In a command line tool build Docker image with `docker build -t chrisblog-fe-angular-image .`
1. (Optional) Check docker image with `docker images`
1. In a command line tool start Docker container with `docker run -d -p 4200:80 --name chrisblog-fe-angular-container chrisblog-fe-angular-image`
1. (Optional) Check docker container with `docker ps -a`
1. In a browser visit `http://localhost:4200`
1. (Optional) Check application logs
     * In a command line tool display applicaction logs with `docker logs chrisblog-fe-angular-container`
1. Clean up environment 
     * In a command line tool stop and remove Docker container with `docker rm -f chrisblog-fe-angular-container`
     * In a command line tool stop and remove Docker image with `docker rmi chrisblog-fe-angular-image`