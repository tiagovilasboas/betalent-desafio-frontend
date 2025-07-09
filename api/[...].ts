// @ts-nocheck
/* eslint-disable */
import type { VercelRequest, VercelResponse } from '@vercel/node'
import jsonServer from 'json-server'
import path from 'path'

// Initialize json-server app only once (Lambda is kept warm between invocations)
const server = jsonServer.create()
const router = jsonServer.router(path.join(process.cwd(), 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

// Export the handler compatible with Vercel functions
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Let json-server handle the request/response cycle
  server(req, res)
}