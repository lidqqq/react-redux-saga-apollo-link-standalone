const { execute, makePromise } = require("apollo-link");
const { HttpLink } = require("apollo-link-http");
const gql = require("graphql-tag");
const fetch = require("node-fetch");

const uri = "http://localhost:4000/graphql";
const link = new HttpLink({ uri, fetch });

const HELLO = {
  query: gql`
    query {
      hello
    }
  `,
};

const BOOKS = {
  query: gql`
    query {
      books {
        id
        title
      }
    }
  `,
};

const GET_BOOKS = id => {
  return {
    query: gql`
      query($id: Int!) {
        getBooks(id: $id) {
          id
          title
        }
      }
    `,
    variables: { id },
  };
};

makePromise(execute(link, HELLO)).then(data =>
  console.log(`received data ${JSON.stringify(data, null, 2)}`),
);

makePromise(execute(link, BOOKS)).then(data =>
  console.log(`received data ${JSON.stringify(data, null, 2)}`),
);

makePromise(execute(link, GET_BOOKS(1))).then(data =>
  console.log(`received data ${JSON.stringify(data, null, 2)}`),
);
