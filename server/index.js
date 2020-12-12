const { ApolloServer, gql } = require('apollo-server');
const merge = require('lodash/merge');
const { typeDefs: userTypeDefs, resolvers: userResolvers } = require('./user');
const { typeDefs: reviewTypeDefs, resolvers: reviewResolvers } = require('./review');
const { typeDefs: productTypeDefs, resolvers: productResolvers } = require('./product');

const Query = gql`
  type Query
`;

const typeDefs = [Query, userTypeDefs, reviewTypeDefs, productTypeDefs];
const resolvers = merge(userResolvers, reviewResolvers, productResolvers);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
