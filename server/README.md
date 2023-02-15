# Backend Design Structure

## Setup Overview

    Postges - A Database to store our data in table
    Prisma - Used To Design Postges Database
    GraphQL - Used to Query Database

## Current BackEnd State

    Template based off of prisma-example GitHub
    Backend code needs to be cleaned up
    Need to Create Database Design

## HOW TO RUN

    Run Postgres Server
        (local)
        sudo service postgresql start
        sudo su postgres
        psql [database-name]
    Mirgate Schemes
        npm(npx) prisma migrate dev
