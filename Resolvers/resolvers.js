/**
 * Apollo Server Boilerplate, released under MIT license.
 * Created by Mohamad Kaakati
 * Email: m@kaakati.me
 * This software is provided as is.
 * 2019
 */

const { ApolloError, PubSub } = require('apollo-server');
const Database = require('../Database/db');
const Methods = require('./imports'); // Mongoose Models Imports
const pubsub = new PubSub();
const { withFilter } = require('apollo-server');





// Connect to Database
Database.connectToDB()



const resolvers = {

    Query: {
    

        // Questions
        fetchQuestions: async (context) => {
            return await Methods.Questions.fetchQuestions(context)
        },
        fetchQuestion: async (_, id) => {
            return await Methods.Questions.fetchQuestion(id)
        },

        // Answers
        fetchAnswers: async (context) => {
            return await Methods.Answers.fetchAnswers(context)
        },
        fetchAnswer: async (_, id) => {
            return await Methods.Answers.fetchAnswer(id)
        },



    
    }
}




module.exports = resolvers;
