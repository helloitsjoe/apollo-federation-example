const { gql } = require('apollo-server');
const { products, reviews, users } = require('./data');

const typeDefs = gql`
  extend type Query {
    myReviews: [Review!]!
    reviewsByAuthor(authorId: ID!): [Review!]!
    allReviews: [Review!]!
  }

  type Review {
    id: ID!
    product: Product!
    author: User!
    stars: Int!
    body: String!
  }
`;

const resolvers = {
  Query: {
    myReviews: () => reviews.filter(review => review.authorId === 0),
    reviewsByAuthor: (_, { authorId }) =>
      reviews.filter(review => review.authorId === Number(authorId)),
    allReviews: () => reviews,
  },
  Review: {
    product: ({ productId }) => products.find(p => p.id === productId),
    author: ({ authorId }) => users.find(u => u.id === authorId),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
