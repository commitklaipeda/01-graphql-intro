require('dotenv').config()
const path = require('path')

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db')

let connection = {}
if (process.env.DB_CONNECTION === 'pg') {
  connection = process.env.PG_CONNECTION
} else {
  connection = {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
}

module.exports = {
  client: process.env.DB_CONNECTION,
  connection,
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
}
