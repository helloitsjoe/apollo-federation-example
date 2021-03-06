const { gql } = require('apollo-server');
const { products, reviews, users } = require('./data');

const typeDefs = gql`
  extend type Query {
    me: User!
    getUser(name: String!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    reviews: [Review!]!
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
