const db = require('../data/seeds/01-schemes');

module.exports = {
    find
}

function find() {
    return db('schemes');
}

