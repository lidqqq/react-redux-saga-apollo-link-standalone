const { gql } = require("apollo-server-express");

module.exports.default = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    hello: String
    books: [Book]
    getBooks(id: Int): [Book]
  }
  type Mutation {
    addBook(title: String): Boolean
  }
  type Book {
    id: Int
    title: String
    author: String
  }
`;
