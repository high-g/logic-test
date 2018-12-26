const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

// mock
const books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowlling',
    price: 2000
  },
  {}
]