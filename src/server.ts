import express from 'express'
import { GraphQLServer } from 'graphql-yoga'

// const server = new GraphQLServer({

// })

// server.start()

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Helloa world' })
})

app.listen(3333)
