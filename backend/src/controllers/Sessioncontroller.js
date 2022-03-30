const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { id }  = request.body;
        console.log(id); 


        const profile = await connection('users')
        .where('id', id)
        .select('name')
        .first(); 

        if (!profile) {
            return response.status(400).json({error: 'No user with such id'});
        }

        return response.json(profile);

    }
}