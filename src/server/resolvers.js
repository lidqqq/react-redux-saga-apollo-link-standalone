const { books } = require("./const");
const { findById } = require("./lib");

module.exports.default = {
  Query: {
    // default args
    // https://www.apollographql.com/docs/apollo-server/essentials/data.html#type-signature
    hello: (parent, args, context, info) => "Hello world!",
    books: () => books,
    // ''A GraphQL query is for fetching data and compares to the GET verb in REST-based APIs.''
    // https://www.apollographql.com/docs/apollo-server/essentials/schema.html#query
    getBooks(parent, args) {
      return findById(books, { id: args.id });
    },
  },
  Mutation: {
    addBooks: (parent, args) => {
      return 3;
    },
  },
};
