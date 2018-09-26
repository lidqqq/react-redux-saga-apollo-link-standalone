const { gql } = require("apollo-server-express");

module.exports.default = gql`
  schema {
    mutation: Mutation
  }
  type Query {
    hello: String
    books: [Book]
    getBooks(id: Int): [Book]
  }
  type Mutation {
    addBooks(title: String): Int
  }
  type Book {
    id: Int
    title: String
    author: String
  }
`;
