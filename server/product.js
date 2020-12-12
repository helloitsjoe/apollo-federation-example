const { gql } = require('apollo-server');

const products = [
  {
    id: 1,
    sku: '123',
    name: 'Chair',
    description: 'Fuzzy',
    reviewIds: [1],
  },
  {
    id: 2,
    sku: '456',
    name: 'Couch',
    description: 'Slimy',
    reviewIds: [0],
  },
];

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
    reviewIds: [Int!]!
  }
`;

const resolvers = {
  Query: {
    productById: (_, { id }) => products.find(product => product.id === id),
    allProducts: () => products,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
