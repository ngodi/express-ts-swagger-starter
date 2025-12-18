import path from 'path';
import { fileURLToPath } from 'node:url';
import swaggerJSDoc from 'swagger-jsdoc';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express TS API',
      version: '1.0.0',
      description: 'Sample API with Swagger + TypeScript',
    },
  },
  servers: [
    {
      url: 'http://localhost:4000', // base URL
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  apis: [
    path.join(__dirname, '../api-docs/*.ts'),
    path.join(__dirname, '../routes/**/*.ts'),
  ],
});
