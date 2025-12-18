# Express + TypeScript + Swagger API

A minimal **Express.js API Documentation starter** built with **TypeScript**, **Swagger (OpenAPI 3.0)**, **ESLint**, and **Prettier**.

This project demonstrates how to:

- Setup API Documentation in an Express + TypeScript app with Swagger
- Enforce code quality with ESLint and Prettier
- Generate **live API documentation** using Swagger

---

## 📦 Tech Stack

- **Node.js + Express** – HTTP server
- **TypeScript** – static typing
- **swagger-jsdoc** – generate OpenAPI spec from comments
- **swagger-ui-express** – interactive API docs
- **ESLint** – code linting
- **Prettier** – code formatting

---

## 📁 Project Structure

```
.
├─ src/
│  ├─ app.ts              # Express app setup
│  ├─ server.ts           # Server entry point
|  ├─ api-docs/health.doc.ts
│  ├─ routes/
│  │  └─ health.route.ts  # Sample route with Swagger docs
│  └─ config/
│     └─ swagger.ts       # Swagger configuration
├─ eslint.config.js
├─ tsconfig.json
├─ .prettierrc
├─ package.json
└─ README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development

```bash
npm run dev
```

The server will start on:

```
http://localhost:3000
```

---

## 📘 API Documentation (Swagger)

This project uses **Swagger (OpenAPI 3.0)** to generate interactive API documentation directly from source code comments.

### Access Swagger UI

Once the server is running, open:

```
http://localhost:4000/api/docs
```

The Swagger UI allows you to:

- View all available endpoints
- Inspect request and response schemas
- See example payloads
- Test endpoints directly from the browser

---

## ⚙️ Swagger Configuration

Swagger is configured in:

```
src/docs/swagger.ts
```

Example configuration:

```ts
import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express TS API',
      version: '1.0.0',
      description: 'Sample API with Swagger + TypeScript',
    },
  },
  apis: [
    path.join(__dirname, '../api-docs/*.ts'),
    path.join(__dirname, '../routes/**/*.ts'),
  ],
});
```

The generated specification is mounted in the Express app:

```ts
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

---

## 📝 Documenting Endpoints

Endpoints are documented using **JSDoc-style comments** placed directly above route handlers or in the /api-docs directory(for readability).

### Example

```ts
/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health check
 *     description: Check if the API is running
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
router.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});
```

Swagger automatically parses these comments and renders them in the UI.

---

## ✅ Best Practices

- Keep Swagger comments close to route definitions
- Always document:
  - HTTP method
  - Endpoint path
  - Response status codes

- Add request body and response schemas where applicable
- Treat Swagger as **living documentation** that evolves with the code

---

## 🧪 Sample Endpoint

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | `/api/health` | API health check |

Response example:

```json
{
  "status": "ok"
}
```

---

## 📌 Notes

- No separate YAML or JSON Swagger files are required
- Documentation stays in sync with the codebase
- This setup is suitable for small services, templates, and production APIs

---

## 📄 License

MIT
