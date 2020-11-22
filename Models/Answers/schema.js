const { gql } = require('apollo-server-express');

const schema = gql`
   type Answer {
        id: String!
        title: String!
        value : String
   }
  
  
   type Query {
        fetchAnswers: [Answer]!
        fetchAnswer(id: String!) : Answer!
   }
`;

module.exports = schema;