/**
 * Apollo Server Boilerplate, released under MIT license.
 * Created by Mohamad Kaakati
 * Email: m@kaakati.me
 * This software is provided as is.
 * 2019
 */

const mongoose = require('mongoose');

exports.connectToDB = function() {
    mongoose.connect('mongodb+srv://ibdaa:123@cluster0.kvxcf.mongodb.net/Ibdaa?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true });
    const db = mongoose.connection;
    // db.collections.schedules.getIndexes();
    // db.collections.schedules.dropIndex('sdate');
    // db.collections.schedules.getIndexes();
    // console.log('from db ', db.collections.schedules)
    db.on('error', () => {
        console.log("Database Faild to connect")
    })
    .once('open', () => {
        console.log("Database Connected!");
        console.log('Calling Seeds.');
        // require('../seeds/index');
    });
}