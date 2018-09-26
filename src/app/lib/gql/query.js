import { HttpLink } from "apollo-link-http";
import { execute, makePromise } from "apollo-link";

const uri = "http://localhost:4000/graphql";
const link = new HttpLink({ uri });

export default operation => {
  return async () => {
    try {
      const res = await makePromise(execute(link, operation));
      return res;
    } catch (e) {
      throw e;
    }
  };
};
