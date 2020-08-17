import {gql} from 'apollo-server-express';

export const Queries = gql`
    type Query {
        users: [User!]
        user(id: ID!): User!
    }
`