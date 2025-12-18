import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import healthRouter from './routes/health.route.js';

export const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
