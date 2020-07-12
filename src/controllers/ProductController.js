const knex = require('../database/connection');

module.exports = {
    async index(request, response){

        const { page = 1 } = request.query;
        
        const countObj = await knex('products').count();
        const [ count ] = countObj;

        const results = await knex('products').limit(10).offset((page - 1) * 10);

        response.header('X-Total-Products', count['count(*)']);
        return response.json(results) ;
    },

    async show(request, response){
        const { id } = request.params;
        const results = await knex('products').where({ id });
        return response.json(results);
    },

    async store(request, response){
        // Criação
        const { title, description, url } = request.body;

        await knex('products').insert({
            title,
            description,
            url
        });

        const product = await knex('products');
        const productCreate = product.find(produto => produto.id === product.length);

        return response.status(201).json(productCreate);
    },

    async update(request, response){
        const { title, description, url } = request.body;
        const { id } = request.params;

        await knex('products').update({
            title,
            description,
            url
        }).where({ id });

        const product = await knex('products').where({ id });
        return response.json(product);
    },

    async destroy(request, response){
        const { id } = request.params;

        await knex('products').where({ id }).del();

        return response.send('Produto deletado com sucesso.');
    }
};