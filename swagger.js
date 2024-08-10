const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Product',
    description: 'API Product'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./app'];


swaggerAutogen(outputFile, routes, doc);