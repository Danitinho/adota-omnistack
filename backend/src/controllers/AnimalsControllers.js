const connection = require("../database/connection");
const { create } = require("./UserControllers");

module.exports = {

    async index(request, response) {

        const {page = 1} = request.query;

        const [count] = await connection('animals').count();

        console.log(count);
        
        const animals = await connection('animals')
        .join('users', 'users.id', '=', 'animals.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
        'animals.*',
        'users.name',
        'users.email',
        'users.phone',
        'users.adress']);

        response.header('X-Total-Count', count['count(*)'])
    
        return response.json(animals);
    },

    async create(request, response) {
        const {animal_name, description, animal_age} = request.body;
        const user_id = request.headers.althorization;

        console.log(user_id);

        const [id] = await connection ('animals').insert({
            animal_name,
            description,
            animal_age,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.althorization;

        const animal = await connection('animals')
        .where('id', id)
        .select('user_id')
        .first();

        if(animal.user_id !== user_id) {
            return response.status(401).json({error: 'Operation not permited'});
        }

        await connection('animals').where('id', id). delete();
        
        return response.status(204).send();
    }
};