const Koa = require('koa')
const graphqlHTTP = require('koa-graphql')
const schema = require('./graphql/schema')

const app = new Koa()
const PORT = 1337

app.use(graphqlHTTP({
  schema: schema,
  graphiql: true
}))

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server


