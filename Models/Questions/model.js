const mongoose = require('mongoose');

let questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

var event = mongoose.model('Question', questionSchema);

module.exports = event;