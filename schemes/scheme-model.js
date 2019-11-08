const db = require('../data/dbConfig');

module.exports = {
    find, 
    findById,
    findSteps,
    add,
    update,
    remove

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

function add(scheme) {
    return db('schemes')
    .insert(scheme);
}

function update(changes, id) {
    return db('schemes')
    .update(changes)
    .where({id});
}

function remove(id) {
    return db('schemes')
    .delete('schemes')
    .where({id});
}