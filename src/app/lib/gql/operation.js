import gql from "graphql-tag";

export default {
  books: {
    query: gql`
      query {
        books {
          id
          title
        }
      }
    `,
  },
  hello: {
    query: gql`
      query {
        hello
      }
    `,
  },
  getBooks(id) {
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
  },
  addBook(title) {
    return {
      query: gql`
        mutation($title: String!) {
          addBook(title: $title)
        }
      `,
      variables: { title },
    };
  },
};
