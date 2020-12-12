const { gql } = require('apollo-server');

const reviews = [
  {
    id: 0,
    authorId: 0,
    stars: 4,
    productId: 1,
    body: 'Pretty good',
  },
  {
    id: 1,
    authorId: 1,
    stars: 1,
    productId: 1,
    body: 'Arf',
  },
  {
    id: 2,
    authorId: 1,
    stars: 5,
    productId: 2,
    body: 'Arf arf',
  },
  {
    id: 3,
    authorId: 0,
    stars: 2,
    productId: 0,
    body: 'Not bad',
  },
];

const typeDefs = gql`
  extend type Query {
    myReviews: [Review!]!
    reviewsByAuthor(authorId: ID!): [Review!]!
    allReviews: [Review!]!
  }

  type Review {
    id: ID!
    productId: ID!
    authorId: ID!
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
};

module.exports = {
  typeDefs,
  resolvers,
};
