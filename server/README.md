# Backend Design Structure

## Setup Overview

    Postgres - A Database to store our data in table
    Prisma - Used To Design Postgres Database
    GraphQL - Used to Query Database

## Current BackEnd State

    Template based off of prisma-example GitHub
    Backend code needs to be cleaned up
    Need to Create Database Design

## HOW TO RUN

    Change "Database URL": postgresql://[username]:[password]@localhost:5432/aggie-compute-db
    Run Postgres Server
        (local)
        sudo service postgresql start
        sudo su postgres
        psql [database-name]
    Migrate Schemes
        npm(npx) prisma migrate dev
    Run GraphQL
        npm run dev
