let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}

const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response) {
        
        const {name, email, phone, adress} = request.body;

        console.log(name);
        
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('users').insert({
            id,
            name,
            email,
            phone,
            adress,
        })
        
        return response.json({ id });
    }
};