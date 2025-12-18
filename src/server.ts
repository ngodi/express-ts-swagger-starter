/* eslint-disable no-undef */
/// <reference lib="dom" />
import { app } from './app.js';

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger docs on http://localhost:${PORT}/api/docs`);
});
