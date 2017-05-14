# Guide

### Postgres setup
- install Postgres
- start it, and open terminal connection to it
- run ```CREATE DATABASE tracker_db;```
- run ```CREATE USER admin;```
- run ```ALTER DATABASE tracker_db OWNER TO admin;```
- if you have some tool like DataGrip to view your database you can now connect to it

### Webapp setup
- clone repo
- cd to the repo
- run ```npm install```
- run ```npm install -g sequelize-cli```
- run ```npm install --save sequelize pg pg-hstore```
- run ```sequelize db:migrate``` this will create all the tables for you
- if you want to undo migrations (delete them in this case) run ```sequelize db:migrate:undo:all```, then you can remake them using the above command

### Running the Webapp
- run ```npm run start```
### API

See [API documentation](api-documentation/), for example, to see user api info click [Users](api-documentation/endpoints/users.md)

