import {gql} from "@apollo/client";

const GET_TODO_LIST = gql(`
    query Todos {
      todos {
        text
        done
        user {
          name
        }
      }
    }
`)

export default GET_TODO_LIST;