import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve __dirname in ESM context
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize JSON Server
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

export default function handler(req, res) {
  // Delegate to JSON-Server Express app
  return server(req, res)
}