const express = require("express");
const app = express();
const ProductRouter = require("./routers/product");
const CategorieRouter = require("./routers/categorie");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// import swagger ui module and swagger json file

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


app.use('/api/product',ProductRouter);
app.use('/api/categorie',CategorieRouter);
// // add route for swagger document API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;