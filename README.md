# GraphQL intro demo app
Presented @ Commit Klaipėda (2019-03-07)

## prerequisites

- git
- node.js
- SQL DB (MySQL, SQLite3, PostgreSQL, MSSQL)

## Instructions

- clone/fork/download repository
- run `npm install`
- create DB table
- copy `.env.example` to `.env` and edit config by you environment
- install npm package by your DB System ([pg](https://github.com/brianc/node-postgres) for PostgreSQL and Amazon Redshift,
[mysql](https://github.com/mysqljs/mysql) for MySQL or MariaDB, [sqlite3](https://github.com/mapbox/node-sqlite3) for SQLite3,
or [mssql](https://github.com/tediousjs/node-mssql) for MSSQL.
- run `knex migrate:latest` and `knex seed:run`
- run `npm run dev`
- open [http://localhost:1337](http://localhost:1337) in your browser
