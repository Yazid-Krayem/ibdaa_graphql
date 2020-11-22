const { ApolloError } = require('apollo-server');
const Answer = require('./model');





// Fetch Questions/s

exports.fetchAnswer = async (input) => {
    return new Promise((resolve, reject) => {
        Answer.findById(input.id, (err, questanswerion) => {
            resolve(answer)
        })
        
           
          }).exec()
    
}

exports.fetchAnswers = async (context) => {
    return new Promise((resolve, reject) => {
        // if (!context.user) {
        //     reject(new ApolloError("Error Fetching Announcements!"));
        // }
        Answer.find({}, (err, answer) => {
            resolve(answer)
        })
         
    })
}