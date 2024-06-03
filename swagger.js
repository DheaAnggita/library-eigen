const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documantation Eigen Library API',
            version: '1.0.0',
            description: 'API documentation for Eigen Library',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'],
};
const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };