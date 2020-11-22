const { gql } = require('apollo-server-express');

const schema = gql`
   type Question {
        id: String!
        title: String!
        answers : Answer !
   }
  
  
   type Query {
        fetchQuestions: [Question]!
        fetchQuestion(id: String!) : Question!
   }
`;

module.exports = schema;