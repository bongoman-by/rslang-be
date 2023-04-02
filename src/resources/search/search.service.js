const searchRepo = require('./search.db.repository');

const search = async term => {
  const words = await searchRepo.search(term);
  return words;
};

module.exports = { search };
