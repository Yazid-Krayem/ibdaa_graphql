const mongoose = require('mongoose');

let answerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: String
    },
   
})

var event = mongoose.model('Answer', answerSchema);

module.exports = event;