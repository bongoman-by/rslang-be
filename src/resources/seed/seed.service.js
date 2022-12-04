const seedRepo = require('./seed.db.repository');

const seed = async () => seedRepo.seed();

module.exports = { seed };
