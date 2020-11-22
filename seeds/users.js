// Importing 'users' collection.
const User = require('../Models/User/model');
const UserMethods = require('../Models/User/methods')

// Adding 'Super Admin' user.
User.findOne({ mobile : "111" }, (error, user) => {
    if(error){ console.log('error', error); }
    if(!user){

        let params = {
            name : 'Super Admin',
            email: 'email@example.com',
            mobile: '111',
            password: '111',
            deviceId: '1',
            last_name: 'Super Admin',
            mobile_number: '111',
            is_male: true,
            id_number: '1',
            language: 'Arabic',
            nationality: 'Syrian',
            address_id: '1',
            role:"5cdab4613ba8b529739544bd"
        }

        UserMethods.createNewUser(params);
    }
})