import {gql} from "@apollo/client";

const GET_TODO_LIST = gql(`
    query Todos {
      todos {
        id
        text
        done
        user {
          name
        }
      }
    }
`)

export default GET_TODO_LIST;