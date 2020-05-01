### Live
URL : https://stock-streams-api-v1.herokuapp.com/

Expect to see the message - "API is working properly"

## About the app

A simple REST API to relay the results from the publicly available StockTwits API (/streams/symbol) and return back to the caller. This helps Frontend applications using JavaScript and running on browsers or devices to bypass the CORS issue they would otherwise face. 

Note: The underlying StockTwits API is rate-limited at maximum 200 requests per hour. This may lead to the 'stock-streams-api-v1' to stop relaying responses for some time.

## Pre-requisites

- Download and install Node.js

- Read and understand the StockTwits API from https://api.stocktwits.com/developers/docs/api

## Getting Started

First, clone the repository

```bash
# Get the latest snapshot
git clone https://github.com/anamika8/stock-streams-api-v1.git

# Change directory
cd stock-streams-api-v1

# Install NPM dependencies
npm install

# Start up the server
npm start
```

> Usage: http://localhost:9000/AAPL or http://localhost:9000/AMZN

```bash
# Deployed in Heroku
# Technologies used: NodeJS, Express
# Node Modules used: cors, node-fetch, morgan
```
