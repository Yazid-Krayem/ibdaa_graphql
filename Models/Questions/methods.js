const { ApolloError } = require('apollo-server');
const Question = require('./model');





// Fetch Questions/s

exports.fetchQuestion = async (input) => {
    return new Promise((resolve, reject) => {
        Question.findById(input.id, (err, question) => {
            resolve(question)
        })
        .populate({
            path: 'Answer',
           
          })
           
          }).exec()
    
}

exports.fetchQuestions = async (context) => {
    return new Promise((resolve, reject) => {
        // if (!context.user) {
        //     reject(new ApolloError("Error Fetching Announcements!"));
        // }
        Question.find({}, (err, question) => {
            resolve(question)
        }).populate({
            path: 'Answer',
           
          })
         
    })
}