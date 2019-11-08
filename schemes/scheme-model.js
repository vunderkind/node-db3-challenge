const db = require('../data/dbConfig');

module.exports = {
    find, 
    findById,
    findSteps
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({id}).first();
}

function findSteps(id) {
    return db('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .select('step_number', 'steps.instructions')
    .where({'schemes.id':id})
    .orderBy('step_number');
}