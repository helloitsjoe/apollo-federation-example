const { gql } = require('apollo-server');

const users = [
  {
    id: 0,
    name: 'Joe',
    email: 'j@j.com',
  },
  {
    id: 1,
    name: 'Olive',
    email: 'olive@j.com',
  },
];

const typeDefs = gql`
  extend type Query {
    me: User!
    getUser(name: String!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

const resolvers = {
  Query: {
    me: () => users[0],
    getUser: (_, { name }) => users.find(user => user.name === name),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
