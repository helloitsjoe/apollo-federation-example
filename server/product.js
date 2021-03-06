const { gql } = require('apollo-server');
const { products, reviews, users } = require('./data');

const typeDefs = gql`
  extend type Query {
    productById(id: ID!): Product!
    allProducts: [Product!]!
  }

  type Product {
    id: ID!
    sku: String!
    name: String!
    description: String!
    reviews: [Review!]!
  }
`;

const resolvers = {
  Query: {
    productById: (_, { id }) => products.find(product => product.id === id),
    allProducts: () => products,
  },
  Product: {
    reviews: ({ id }) => reviews.filter(r => r.id === id),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
