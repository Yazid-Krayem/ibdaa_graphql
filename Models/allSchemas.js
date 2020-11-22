const { mergeTypes } = require('merge-graphql-schemas');

const questionsType = require('./Questions/schema');
const answersType = require('./Answers/schema');


const types = [
    questionsType,
    answersType
  
];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
const schemas =  mergeTypes(types, { all: true });
// console.log('this is schemas',schemas)
module.exports = schemas;
