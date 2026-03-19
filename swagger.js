const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temples API',
    description: 'CSE 341 Temple API Documentation',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the version of swagger-autogen that is 2.X.X or above, 
   you must call the function as follows: */
swaggerAutogen(outputFile, endpointsFiles, doc);