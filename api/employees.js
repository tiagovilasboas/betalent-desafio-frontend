import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve current directory in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a JSON Server instance
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();

// Apply default middlewares (logger, CORS, etc.)
server.use(middlewares);

// Use the JSON Server router to handle all routes ( /employees etc. )
server.use(router);

// Export as the Vercel serverless handler
export default function handler(req, res) {
  // Delegate the request/response to the Express-style JSON Server instance
  return server(req, res);
}